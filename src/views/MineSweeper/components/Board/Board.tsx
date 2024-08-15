/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Grid } from "@mui/material";
import { deepCopy } from "deep-copy-ts";
import * as React from "react";
import { clamp } from "utils";
import { BOMBS } from "views/MineSweeper/constants";
import { useGameState } from "views/MineSweeper/game-state-context";
import { COLUMNS, ROWS } from "../../constants";
import { Cell } from "./components";
import * as sx from "./styles";

export type CellProps = {
  value: number;
  isVisible: boolean;
  isFlagged: boolean;
};

type Neighbor = {
  col: number;
  row: number;
};

const Board = () => {
  const gameState = useGameState();

  const bombs = BOMBS;

  const getCellNeighbors = React.useCallback(
    (cellRow: number, cellCol: number) => {
      const startCol = clamp(cellCol - 1, 0, COLUMNS - 1);
      const startRow = clamp(cellRow - 1, 0, ROWS - 1);
      const endCol = clamp(cellCol + 1, 0, COLUMNS - 1);
      const endRow = clamp(cellRow + 1, 0, ROWS - 1);

      const neighbors: Neighbor[] = [];

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          if (row === cellRow && col === cellCol) continue;

          neighbors.push({
            row,
            col,
          });
        }
      }

      return neighbors;
    },
    [],
  );

  const getHiddenCells = React.useCallback((cells: CellProps[][]) => {
    let result = 0;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        const cellData = cells[row]![col]!;

        result = cellData.isVisible ? result : result + 1;
      }
    }

    return result;
  }, []);

  const [cells, setCells] = React.useState<CellProps[][]>(() => {
    const cells: CellProps[][] = [];

    for (let row = 0; row < ROWS; row++) {
      const cellsRow: CellProps[] = [];

      for (let col = 0; col < COLUMNS; col++) {
        const cellData: CellProps = {
          value: 0,
          isVisible: false,
          isFlagged: false,
        };

        cellsRow.push(cellData);
      }

      cells.push(cellsRow);
    }

    // === PLACING BOMBS === //
    // === ADDING NUMBERS === //

    let i = bombs;
    while (i > 0) {
      const randCol = Math.floor(Math.random() * COLUMNS);
      const randRow = Math.floor(Math.random() * ROWS);

      // idicator for bomb is "-1"
      if (cells[randRow]![randCol]!.value !== -1) {
        cells[randRow]![randCol]!.value = -1;

        const neighbors = getCellNeighbors(randRow, randCol);

        neighbors.forEach(neighbor => {
          if (cells[neighbor.row]![neighbor.col]!.value === -1) return;

          cells[neighbor.row]![neighbor.col]!.value++;
        });

        i--;
      }

      continue;
    }

    return cells;
  });

  const handleNeighbors = React.useCallback(
    (row: number, col: number, newCells: CellProps[][]) => {
      if (!gameState) return;
      const { setRemainingBombs } = gameState;

      const isCellVisible = cells[row]![col]!.isVisible;
      if (isCellVisible) return;

      newCells[row]![col]!.isVisible = true;

      const currentCell = cells[row]![col]!;

      if (currentCell.isFlagged) {
        newCells[row]![col]!.isFlagged = false;
        setRemainingBombs(current => current + 1);
      }

      if (currentCell.value > 0) return;

      const neighbors = getCellNeighbors(row, col);

      neighbors.forEach(neighbor => {
        const isNeighborVisible =
          newCells[neighbor.row]![neighbor.col]!.isVisible;

        if (isNeighborVisible) return;

        handleNeighbors(neighbor.row, neighbor.col, newCells);
      });

      return;
    },
    [cells, gameState, getCellNeighbors],
  );

  const handleCellLeftClick = React.useCallback(
    (row: number, col: number) => {
      if (!gameState) return;
      const {
        gameCondition,
        setGameCondition,
        setRemainingBombs,
        setHiddenCells,
      } = gameState;
      if (gameCondition !== "running") return;

      const clickedCell = cells[row]![col]!;

      const newCells: CellProps[][] = deepCopy(cells);

      newCells[row]![col]!.isVisible = true;

      if (clickedCell.isFlagged) {
        newCells[row]![col]!.isFlagged = false;
        setRemainingBombs(current => current + 1);
      }

      if (clickedCell.value > 0) {
        setCells(newCells);
        setHiddenCells(getHiddenCells(newCells));
        return;
      }

      if (clickedCell.value === -1) {
        setGameCondition("lose");
        setCells(newCells);
        setHiddenCells(getHiddenCells(newCells));
        return;
      }

      const neighbors = getCellNeighbors(row, col);

      neighbors.forEach(neighbor =>
        handleNeighbors(neighbor.row, neighbor.col, newCells),
      );

      setCells(newCells);
      setHiddenCells(getHiddenCells(newCells));
    },
    [cells, gameState, getCellNeighbors, getHiddenCells, handleNeighbors],
  );

  const handleCellRightClick = React.useCallback(
    (row: number, col: number) => {
      if (!gameState) return;
      const { gameCondition, setRemainingBombs } = gameState;
      if (gameCondition !== "running") return;

      const clickedCell = cells[row]![col]!;

      const newCells: CellProps[][] = deepCopy(cells);

      const isCellFlagged = clickedCell.isFlagged;

      if (isCellFlagged) {
        newCells[row]![col]!.isFlagged = false;
        setRemainingBombs(current => current + 1);
      } else {
        newCells[row]![col]!.isFlagged = true;
        setRemainingBombs(current => current - 1);
      }

      setCells(newCells);
    },
    [cells, gameState],
  );

  const renderCells = React.useCallback(() => {
    return cells.map((cellsRow, rowIdx) =>
      cellsRow.map((cell, colIdx) => {
        const cellElement = (
          <Cell
            key={`${rowIdx}-${colIdx}`}
            row={rowIdx}
            col={colIdx}
            value={cell.value}
            isVisible={cell.isVisible}
            isFlagged={cell.isFlagged}
            onLeftClick={handleCellLeftClick}
            onRightClick={handleCellRightClick}
          />
        );

        return cellElement;
      }),
    );
  }, [cells, handleCellLeftClick, handleCellRightClick]);

  return (
    <Grid sx={sx.root} container columns={COLUMNS}>
      {renderCells()}
    </Grid>
  );
};

export default Board;

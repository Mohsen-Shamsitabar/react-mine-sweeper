import { Grid, Stack, Typography } from "@mui/material";
import { BombIcon, FlagIcon } from "assets";
import * as React from "react";
import { mergeSx } from "utils";
import { useGameState } from "views/MineSweeper/game-state-context";
import { type CellProps } from "../Board";
import { VALUE_FONT_SIZE, VALUE_TO_COLOR } from "./constants";
import * as sx from "./styles";

type Props = CellProps & {
  row: number;
  col: number;
  onLeftClick: (row: number, col: number) => void;
  onRightClick: (row: number, col: number) => void;
};

enum MouseButton {
  LEFT_CLICK = 0,
  RIGHT_CLICK = 2,
}

const Cell = (props: Props) => {
  const { value, onLeftClick, onRightClick, row, col, isVisible, isFlagged } =
    props;

  const gameState = useGameState();
  if (!gameState) return null;
  const { gameCondition } = gameState;

  const isGameOver = gameCondition !== "running";

  const handleCellClick: React.MouseEventHandler<HTMLDivElement> = event => {
    if (isVisible) return;

    const key = event.button as MouseButton;

    switch (key) {
      case MouseButton.LEFT_CLICK: {
        onLeftClick(row, col);
        return;
      }
      case MouseButton.RIGHT_CLICK: {
        onRightClick(row, col);
        return;
      }
      default:
        return;
    }
  };

  const renderValue = () => {
    if (!isVisible) {
      if (isFlagged) return <FlagIcon />;

      return null;
    }

    switch (value) {
      case -1: {
        return <BombIcon />;
      }
      case 0: {
        return null;
      }
      default:
        return (
          <Typography fontSize={VALUE_FONT_SIZE} color={VALUE_TO_COLOR[value]}>
            {value}
          </Typography>
        );
    }
  };

  return (
    <Grid
      sx={
        isVisible
          ? mergeSx(sx.root(isGameOver), sx.rootVisible(value === -1))
          : sx.root(isGameOver)
      }
      item
      xs={1}
      onMouseDown={handleCellClick}
    >
      <Stack sx={sx.valueContainer} justifyContent="center" alignItems="center">
        {renderValue()}
      </Stack>
    </Grid>
  );
};

export default Cell;

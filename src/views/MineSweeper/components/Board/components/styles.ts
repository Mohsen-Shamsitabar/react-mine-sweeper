import { type SxProps } from "@mui/material";
import {
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
} from "views/MineSweeper/constants";
import { CELL_SIZE } from "../constants";
import {
  BOMB_CELL_COLOR,
  HIDDEN_CELL_BORDER_SIZE,
  HIDDEN_CELL_COLOR,
  VISIBLE_CELL_BORDER_COLOR,
  VISIBLE_CELL_BORDER_SIZE,
  VISIBLE_CELL_COLOR,
} from "./constants";

export const root = (isGameOver: boolean): SxProps => ({
  backgroundColor: HIDDEN_CELL_COLOR,
  width: `${CELL_SIZE}px`,
  height: `${CELL_SIZE}px`,

  borderTop: `${HIDDEN_CELL_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderLeft: `${HIDDEN_CELL_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,

  borderRight: `${HIDDEN_CELL_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderBottom: `${HIDDEN_CELL_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,

  userSelect: "none",

  ":hover": {
    cursor: isGameOver ? "default" : "pointer",
  },
});

export const rootVisible = (isBomb: boolean): SxProps => ({
  backgroundColor: isBomb ? BOMB_CELL_COLOR : VISIBLE_CELL_COLOR,

  borderTop: `${VISIBLE_CELL_BORDER_SIZE}px solid ${VISIBLE_CELL_BORDER_COLOR}`,
  borderLeft: `${VISIBLE_CELL_BORDER_SIZE}px solid ${VISIBLE_CELL_BORDER_COLOR}`,

  borderRight: `${VISIBLE_CELL_BORDER_SIZE}px solid ${VISIBLE_CELL_BORDER_COLOR}`,
  borderBottom: `${VISIBLE_CELL_BORDER_SIZE}px solid ${VISIBLE_CELL_BORDER_COLOR}`,

  ":hover": {
    cursor: "default",
  },
});

export const valueContainer: SxProps = {
  width: "100%",
  height: "100%",
};

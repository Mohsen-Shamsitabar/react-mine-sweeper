import { type SxProps } from "@mui/material";
import {
  COLUMNS,
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
  CONTAINER_BORDER_SIZE,
  CONTAINER_COLOR,
} from "views/MineSweeper/constants";
import { CELL_SIZE } from "./constants";

export const root: SxProps = {
  backgroundColor: CONTAINER_COLOR,
  marginTop: `${CONTAINER_BORDER_SIZE}px`,
  width: COLUMNS * CELL_SIZE,

  borderTop: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderLeft: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,

  borderRight: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderBottom: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
};

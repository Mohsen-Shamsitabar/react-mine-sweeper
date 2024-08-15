import { type SxProps } from "@mui/material";
import {
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
} from "views/MineSweeper/constants";
import { BACKGROUND_COLOR, DIGITS_CONTAINER_BORDER_SIZE } from "./constants";

export const root: SxProps = {
  padding: 0.4,
  backgroundColor: BACKGROUND_COLOR,

  borderTop: `${DIGITS_CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderLeft: `${DIGITS_CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,

  borderRight: `${DIGITS_CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderBottom: `${DIGITS_CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
};

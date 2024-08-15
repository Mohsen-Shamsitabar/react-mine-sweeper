import { type SxProps } from "@mui/material";
import {
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
  CONTAINER_BORDER_SIZE,
  CONTAINER_COLOR,
} from "views/MineSweeper/constants";

export const root: SxProps = {
  backgroundColor: CONTAINER_COLOR,
  padding: `${CONTAINER_BORDER_SIZE}px`,

  borderTop: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderLeft: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,

  borderRight: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderBottom: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
};

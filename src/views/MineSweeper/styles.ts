import { type SxProps } from "@mui/material";
import {
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
  CONTAINER_BORDER_SIZE,
  CONTAINER_COLOR,
} from "./constants";

export const root: SxProps = {
  overflow: "hidden",

  backgroundColor: CONTAINER_COLOR,
  padding: `${CONTAINER_BORDER_SIZE}px`,

  borderTop: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderLeft: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,

  borderRight: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderBottom: `${CONTAINER_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
};

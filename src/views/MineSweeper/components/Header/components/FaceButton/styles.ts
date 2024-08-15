import { type SxProps } from "@mui/material";
import {
  CONTAINER_BORDER_COLOR_DARK,
  CONTAINER_BORDER_COLOR_LIGHT,
  CONTAINER_COLOR,
} from "views/MineSweeper/constants";
import { ICON_BORDER_SIZE, ICON_SIZE } from "./constants";

export const root: SxProps = {
  backgroundColor: CONTAINER_COLOR,
  padding: 0,
  borderRadius: 0,
  width: `${ICON_SIZE}px`,
  height: `${ICON_SIZE}px`,

  borderTop: `${ICON_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,
  borderLeft: `${ICON_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_LIGHT}`,

  borderRight: `${ICON_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,
  borderBottom: `${ICON_BORDER_SIZE}px solid ${CONTAINER_BORDER_COLOR_DARK}`,

  ":hover": {
    cursor: "pointer",
  },

  ":active": {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};

import { type SxProps } from "@mui/material";
import {
  ACTIVE_BORDER_COLOR,
  BACKGROUND_COLOR,
  BOX_SIZE,
  DIGIT_BORDER_SIZE,
  INACTIVE_BORDER_COLOR,
} from "../constants";

type DigitStyles = {
  top: SxProps;
  bottom: SxProps;
};

export const box: SxProps = {
  width: BOX_SIZE,
  height: BOX_SIZE,
  bgcolor: BACKGROUND_COLOR,
};

export const topBox: SxProps = {
  borderTop: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
  borderRight: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
  borderBottom: `${DIGIT_BORDER_SIZE / 2}px solid ${INACTIVE_BORDER_COLOR}`,
  borderLeft: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
};

export const bottomBox: SxProps = {
  borderTop: `${DIGIT_BORDER_SIZE / 2}px solid ${INACTIVE_BORDER_COLOR}`,
  borderRight: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
  borderBottom: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
  borderLeft: `${DIGIT_BORDER_SIZE}px solid ${INACTIVE_BORDER_COLOR}`,
};

export const NUMBER_TO_STYLE: Record<string, DigitStyles> = {
  "-": {
    top: { borderBottomColor: ACTIVE_BORDER_COLOR },
    bottom: { borderTopColor: ACTIVE_BORDER_COLOR },
  },
  "0": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
  },
  "1": {
    top: {
      borderRightColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderRightColor: ACTIVE_BORDER_COLOR,
    },
  },
  "2": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
  },
  "3": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
    },
  },
  "4": {
    top: {
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
    },
  },
  "5": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
    },
  },
  "6": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
  },
  "7": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderRightColor: ACTIVE_BORDER_COLOR,
    },
  },
  "8": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
  },
  "9": {
    top: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
      borderLeftColor: ACTIVE_BORDER_COLOR,
    },
    bottom: {
      borderTopColor: ACTIVE_BORDER_COLOR,
      borderRightColor: ACTIVE_BORDER_COLOR,
      borderBottomColor: ACTIVE_BORDER_COLOR,
    },
  },
};

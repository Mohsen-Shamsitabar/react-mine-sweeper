import { Box, Stack } from "@mui/material";
import { mergeSx } from "utils";
import * as sx from "./styles";

type Props = {
  digit: string;
};

const Digit = (props: Props) => {
  const { digit } = props;

  return (
    <Stack direction="column">
      <Box
        sx={mergeSx(sx.box, sx.topBox, sx.NUMBER_TO_STYLE[digit]?.top)}
      ></Box>

      <Box
        sx={mergeSx(sx.box, sx.bottomBox, sx.NUMBER_TO_STYLE[digit]?.bottom)}
      ></Box>
    </Stack>
  );
};

export default Digit;

import { Stack } from "@mui/material";
import { FaceButton, Mines, Timer } from "./components";
import * as sx from "./styles";

const Header = () => {
  return (
    <Stack
      sx={sx.root}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Mines />

      <FaceButton />

      <Timer />
    </Stack>
  );
};

export default Header;

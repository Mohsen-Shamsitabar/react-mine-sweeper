import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const SvgContainer = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      {children}
    </Stack>
  );
};

export default SvgContainer;

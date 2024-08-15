import { Stack } from "@mui/material";
import { DIGIT_BORDER_SIZE, MAX_DIGITS } from "./constants";
import { Digit } from "./Digit";
import * as sx from "./style";

type Props = {
  number: number;
};

const DigitsContainer = (props: Props) => {
  const { number } = props;

  const digits = number.toString().split("");

  if (digits.length > MAX_DIGITS) {
    throw new Error("max length reached for DigitsContainer!");
  }

  const renderDigits = () => {
    const digitElements: JSX.Element[] = [];

    for (let i = 0; i < MAX_DIGITS - digits.length; i++) {
      const digitEl = <Digit key={`default-${i}`} digit={"0"} />;
      digitElements.push(digitEl);
    }

    digits.forEach((digit, idx) => {
      const digitEl = <Digit key={`${digit}-${idx}`} digit={digit} />;
      digitElements.push(digitEl);
    });

    return digitElements;
  };

  return (
    <Stack sx={sx.root} direction="row" spacing={DIGIT_BORDER_SIZE / 8}>
      {renderDigits()}
    </Stack>
  );
};

export default DigitsContainer;

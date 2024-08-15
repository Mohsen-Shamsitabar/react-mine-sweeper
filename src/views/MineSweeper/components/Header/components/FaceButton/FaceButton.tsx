import { Box } from "@mui/material";
import { CoolFaceIcon, DeadFaceIcon, ThinkingFaceIcon } from "assets";
import { useGameState } from "views/MineSweeper/game-state-context";
import * as sx from "./styles";

const FaceButton = () => {
  const gameState = useGameState();
  if (!gameState) return null;

  const { resetStates, gameCondition } = gameState;

  const handleButtonClick = () => {
    resetStates();
  };

  const renderIcon = () => {
    if (gameCondition === "lose") {
      return <DeadFaceIcon />;
    }

    if (gameCondition === "win") {
      return <CoolFaceIcon />;
    }

    return <ThinkingFaceIcon />;
  };

  return (
    <Box sx={sx.root} onClick={handleButtonClick}>
      {renderIcon()}
    </Box>
  );
};

export default FaceButton;

import { useGameState } from "views/MineSweeper/game-state-context";
import { DigitsContainer } from "./DigitsContainer";

const Mines = () => {
  const gameState = useGameState();
  if (!gameState) return null;

  const { remainingBombs } = gameState;

  return <DigitsContainer number={remainingBombs} />;
};

export default Mines;

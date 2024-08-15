import * as React from "react";
import { useGameState } from "views/MineSweeper/game-state-context";
import { DigitsContainer } from "./DigitsContainer";

const Timer = () => {
  const gameState = useGameState();

  const [timePassed, setTimePassed] = React.useState(0);

  React.useEffect(() => {
    if (!gameState) return;

    const { gameCondition, timer } = gameState;

    if (gameCondition !== "running") return;

    const intervalTimer = setInterval(() => {
      timer.current++;
      setTimePassed(current => current + 1);
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState?.gameCondition]);

  return <DigitsContainer number={timePassed} />;
};

export default Timer;

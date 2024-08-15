import { Stack } from "@mui/material";
import * as React from "react";
import { Board, Header } from "./components";
import { BOMBS } from "./constants";
import { GameStateProvider } from "./game-state-context";
import * as sx from "./styles";
import { type GameConditions } from "./types";

const MineSweeper = () => {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const timerRef = React.useRef(0);
  const rightFlagsRef = React.useRef(0);
  const [gameCondition, setGameCondition] =
    React.useState<GameConditions>("running");

  const [remainingBombs, setRemainingBombs] = React.useState<number>(BOMBS);
  const [resetCount, setResetCount] = React.useState<number>(0);
  const resetStates = React.useCallback(() => {
    timerRef.current = 0;
    rightFlagsRef.current = 0;
    setGameCondition("running");
    setRemainingBombs(BOMBS);

    setResetCount(resetCount + 1);
  }, [resetCount]);

  const checkGameCondition = React.useCallback(() => {
    if (gameCondition !== "running") return;

    if (rightFlagsRef.current === BOMBS && remainingBombs === 0) {
      setGameCondition("win");
    }
  }, [gameCondition, remainingBombs]);

  checkGameCondition();

  React.useEffect(() => {
    if (!rootRef.current) return;

    const root = rootRef.current;

    const listener = (event: MouseEvent) => event.preventDefault();
    root.addEventListener("contextmenu", listener);

    return () => {
      root.removeEventListener("contextmenu", listener);
    };
  });

  return (
    <Stack alignItems="center" justifyContent="center">
      <GameStateProvider
        gameState={{
          timer: timerRef,
          gameCondition,
          setGameCondition,
          remainingBombs,
          setRemainingBombs,
          resetStates,
          resetCount,
          rightFlags: rightFlagsRef,
        }}
      >
        <Stack key={resetCount} ref={rootRef} sx={sx.root} direction="column">
          <Header />

          <Board />
        </Stack>
      </GameStateProvider>
    </Stack>
  );
};

export default MineSweeper;

import * as React from "react";
import type { GameConditions } from "./types";

type GameState = {
  timer: React.MutableRefObject<number>;
  rightFlags: React.MutableRefObject<number>;
  gameCondition: GameConditions;
  setGameCondition: React.Dispatch<React.SetStateAction<GameConditions>>;
  setRemainingBombs: React.Dispatch<React.SetStateAction<number>>;
  remainingBombs: number;
  resetCount: number;
  resetStates: () => void;
};

const Context = React.createContext<GameState | null>(null);

if (process.env.NODE_ENV !== "production") {
  Context.displayName = "GameStateContext";
}

type ProviderProps = {
  children: React.ReactNode;
  gameState: GameState;
};

export const Provider = (props: ProviderProps) => {
  const { children, gameState } = props;

  return <Context.Provider value={gameState}>{children}</Context.Provider>;
};

const useContext = () => React.useContext(Context);

export { Provider as GameStateProvider, useContext as useGameState };

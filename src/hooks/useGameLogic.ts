import { useState, useCallback } from "react";
import { generateSecret, checkGuess, isValidGuess } from "@/lib/gameUtils";
import type { GuessResult } from "@/types/guess";

export type GameState = "playing" | "won" | "lost";

export function useGameLogic() {
  const [secret, setSecret] = useState<string>(generateSecret());
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const resetGame = useCallback(() => {
    setSecret(generateSecret());
    setGuesses([]);
    setGameState("playing");
    setCurrentGuess("");
    setError(null);
  }, []);

  const submitGuess = useCallback(() => {
    if (gameState !== "playing") return;

    if (!isValidGuess(currentGuess)) {
      setError("Guess must be 4 unique digits.");
      return;
    }

    const { cows, bulls } = checkGuess(secret, currentGuess);
    const newGuessResult: GuessResult = { guessed: currentGuess, cows, bulls };

    setGuesses((prev) => [newGuessResult, ...prev]);
    setCurrentGuess("");
    setError(null);

    if (bulls === 4) {
      setGameState("won");
    }
  }, [currentGuess, secret, gameState]);

  const appendDigit = useCallback(
    (digit: string) => {
      if (gameState !== "playing") return;
      if (currentGuess.includes(digit)) return;
      if (currentGuess.length >= 4) return;

      setCurrentGuess((prev) => prev + digit);
      setError(null);
    },
    [currentGuess, gameState],
  );

  const backspace = useCallback(() => {
    if (gameState !== "playing") return;
    setCurrentGuess((prev) => prev.slice(0, -1));
    setError(null);
  }, [gameState]);

  return {
    secret,
    guesses,
    gameState,
    currentGuess,
    error,
    resetGame,
    submitGuess,
    appendDigit,
    backspace,
  };
}

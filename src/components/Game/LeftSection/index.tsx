import { useGameLogic } from "@/hooks/useGameLogic";
import Header from "@/components/Header";
import GuessedRow from "./GuessedRow";
import GameResult from "./GameResult";
import InputSection from "./InputSection";

interface LeftSectionProps {
  lastDetectedGesture: string | null;
}

const LeftSection: React.FC<LeftSectionProps> = ({ lastDetectedGesture }) => {
  const {
    guesses,
    gameState,
    currentGuess,
    error,
    submitGuess,
    appendDigit,
    backspace,
  } = useGameLogic();

  return (
    <div className="space-y-6">
      <Header />
      <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
        <GuessedRow guesses={guesses} />
        <div className="mt-auto space-y-4">
          {gameState === "won" ? (
            <GameResult />
          ) : (
            <InputSection
              lastDetectedGesture={lastDetectedGesture}
              currentGuess={currentGuess}
              error={error}
              appendDigit={appendDigit}
              backspace={backspace}
              submitGuess={submitGuess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

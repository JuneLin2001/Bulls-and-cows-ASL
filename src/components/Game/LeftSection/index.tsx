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
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl min-h-100 flex flex-col">
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

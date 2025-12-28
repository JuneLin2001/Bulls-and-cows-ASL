import { useGameLogic } from "@/hooks/useGameLogic";
import Header from "@/components/Header";
import GuessedRow from "./GuessedRow";
import GameResult from "./GameResult";

interface InputSectionProps {
  lastDetectedGesture: string | null;
}

const InputSection: React.FC<InputSectionProps> = ({ lastDetectedGesture }) => {
  const { gameState } = useGameLogic();

  return (
    <div className="space-y-6">
      <Header />
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl min-h-100 flex flex-col">
        <GuessedRow />
        <div className="mt-auto space-y-4">
          {gameState === "won" ? (
            <GameResult />
          ) : (
            <InputSection lastDetectedGesture={lastDetectedGesture} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputSection;

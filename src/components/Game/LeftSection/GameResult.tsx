import Confetti from "react-confetti";

interface GameResultProps {
  resetGame: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ resetGame }) => {
  return (
    <div className="rounded bg-gray-800 p-6 text-center">
      <h2 className="mb-2 text-2xl font-bold text-green-400">You Won! 🎉</h2>
      <button
        onClick={resetGame}
        className="mt-4 cursor-pointer rounded bg-green-600 px-6 py-2 font-bold transition-colors hover:bg-green-700"
      >
        Play Again
      </button>
      <Confetti />
    </div>
  );
};

export default GameResult;

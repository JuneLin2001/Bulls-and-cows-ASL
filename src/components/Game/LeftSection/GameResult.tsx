import { useGameLogic } from "@/hooks/useGameLogic";

const GameResult = () => {
  const { secret, resetGame } = useGameLogic();

  return (
    <div className="bg-green-500/20 border border-green-500/50 p-4 rounded text-center">
      <h2 className="text-2xl font-bold text-green-400 mb-2">You Won! 🎉</h2>
      <p>
        The secret was
        <span className="font-mono font-bold">{secret}</span>
      </p>
      <button
        onClick={resetGame}
        className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded font-bold transition-colors"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameResult;

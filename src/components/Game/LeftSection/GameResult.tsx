import { useGameLogic } from "@/hooks/useGameLogic";

const GameResult = () => {
  const { secret, resetGame } = useGameLogic();

  return (
    <div className="rounded border border-green-500/50 bg-green-500/20 p-4 text-center">
      <h2 className="mb-2 text-2xl font-bold text-green-400">You Won! 🎉</h2>
      <p>
        The secret was
        <span className="font-mono font-bold">{secret}</span>
      </p>
      <button
        onClick={resetGame}
        className="mt-4 rounded bg-green-600 px-6 py-2 font-bold transition-colors hover:bg-green-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameResult;

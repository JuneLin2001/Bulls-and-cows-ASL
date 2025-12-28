import { useGameLogic } from "@/hooks/useGameLogic";

const GuessedRow = () => {
  const { guesses } = useGameLogic();

  return (
    <div className="flex-1 overflow-y-auto space-y-2 mb-4 h-48 max-h-48 scrollbar-thin scrollbar-thumb-gray-700">
      {guesses.length === 0 && (
        <div className="text-center text-gray-500 py-10 italic">
          Make a guess to start!
        </div>
      )}
      {guesses.map((g, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-700"
        >
          <span className="font-mono text-xl tracking-widest">{g.guess}</span>
          <div className="flex gap-4 text-sm">
            <span className="text-green-400 font-bold">{g.bulls} Bulls</span>
            <span className="text-yellow-400 font-bold">{g.cows} Cows</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuessedRow;

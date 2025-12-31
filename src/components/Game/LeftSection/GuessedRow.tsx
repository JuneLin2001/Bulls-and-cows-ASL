import type { GuessResult } from "@/types/guess";

interface GuessedRowProps {
  guesses: GuessResult[];
}

const GuessedRow: React.FC<GuessedRowProps> = ({ guesses }) => {
  return (
    <div className="mb-4 max-h-48 min-h-48 flex-1 space-y-2 overflow-y-auto">
      {guesses.length === 0 && (
        <div className="flex h-48 items-center justify-center">
          <p className="text-center text-2xl text-gray-400">
            Make a guess to start!
          </p>
        </div>
      )}
      {guesses.map((guess, index) => (
        <div
          key={`${guess.guessed}-${index}`}
          data-latest={guess.isLatest}
          className="flex items-center justify-between rounded border border-gray-700 bg-gray-800/50 p-3 data-[latest=true]:border-green-400 data-[latest=true]:bg-green-900/40 data-[latest=true]:ring-1 data-[latest=true]:ring-green-400/60"
        >
          <span className="font-mono text-xl tracking-widest">
            {guess.guessed}
          </span>
          <div className="flex gap-4 text-sm">
            <span className="font-bold text-green-400">
              {guess.bulls} Bulls
            </span>
            <span className="font-bold text-yellow-400">{guess.cows} Cows</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuessedRow;

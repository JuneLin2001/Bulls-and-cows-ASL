import { LuDelete, LuSendHorizontal } from "react-icons/lu";

interface InputKeypadProps {
  currentGuess: string;
  appendDigit: (digit: string) => void;
  backspace: () => void;
  submitGuess: () => void;
}

const InputKeypad: React.FC<InputKeypadProps> = ({
  currentGuess,
  appendDigit,
  backspace,
  submitGuess,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button
          key={num}
          onClick={() => appendDigit(num.toString())}
          disabled={currentGuess.includes(num.toString())}
          className="p-4 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed rounded text-xl font-bold transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={backspace}
        className="p-4 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded flex items-center justify-center transition-colors"
      >
        <LuDelete size={24} />
      </button>
      <button
        onClick={submitGuess}
        disabled={currentGuess.length !== 4}
        className="col-span-2 p-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded flex items-center justify-center font-bold text-lg transition-colors"
      >
        Submit Guess <LuSendHorizontal size={20} className="ml-2" />
      </button>
    </div>
  );
};

export default InputKeypad;

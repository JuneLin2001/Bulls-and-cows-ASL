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
          className="rounded bg-gray-800 p-4 text-xl font-bold transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {num}
        </button>
      ))}
      <button
        onClick={backspace}
        className="flex items-center justify-center rounded bg-red-900/30 p-4 text-red-400 transition-colors hover:bg-red-900/50"
      >
        <LuDelete size={24} />
      </button>
      <button
        onClick={submitGuess}
        className="flex items-center justify-center rounded bg-blue-600 p-4 text-lg font-bold transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LuSendHorizontal size={24} />
      </button>
    </div>
  );
};

export default InputKeypad;

import { useState } from "react";
import { LuDelete, LuSendHorizontal, LuEye, LuEyeOff } from "react-icons/lu";
import ASLPlaceholder from "./ASLPlaceholder";

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
  const [showASL, setShowASL] = useState(true);

  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <button
          onClick={() => setShowASL(!showASL)}
          className="flex items-center gap-2 rounded bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700"
          title={showASL ? "Hide ASL signs" : "Show ASL signs"}
        >
          {showASL ? <LuEyeOff size={16} /> : <LuEye size={16} />}
          <span>{showASL ? "Hide" : "Show"} ASL</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => appendDigit(num.toString())}
            disabled={currentGuess.includes(num.toString())}
            className={`flex items-center justify-center rounded bg-gray-800 p-4 transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30 ${showASL ? "gap-3" : ""}`}
          >
            {showASL ? (
              <ASLPlaceholder num={num} />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-md text-2xl">
                {num}
              </div>
            )}
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
    </div>
  );
};

export default InputKeypad;

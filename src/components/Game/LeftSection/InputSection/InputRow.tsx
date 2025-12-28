import { useEffect } from "react";
import toast from "react-hot-toast";

interface InputRowProps {
  lastDetectedGesture: string | null;
  currentGuess: string;
  error: string | null;
}

const InputRow: React.FC<InputRowProps> = ({
  lastDetectedGesture,
  currentGuess,
  error,
}) => {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="relative">
      <div className="mb-2 h-6 text-center">
        {lastDetectedGesture && (
          <span className="animate-pulse text-sm text-blue-400">
            Detected: {lastDetectedGesture} (Hold to input)
          </span>
        )}
      </div>
      <input
        type="text"
        readOnly
        value={currentGuess}
        className="w-full rounded-lg border-2 border-gray-700 bg-gray-950 p-4 text-center font-mono text-3xl tracking-[1em] transition-colors focus:border-blue-500 focus:outline-none data-error:border-red-500"
        placeholder="____"
      />
    </div>
  );
};

export default InputRow;

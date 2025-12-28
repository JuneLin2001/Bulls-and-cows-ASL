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
      {error && (
        <div className="absolute right-0 -bottom-6 left-0 text-center text-sm text-red-400">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputRow;

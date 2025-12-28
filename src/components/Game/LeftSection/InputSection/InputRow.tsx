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
      <div className="text-center mb-2 h-6">
        {lastDetectedGesture && (
          <span className="text-blue-400 text-sm animate-pulse">
            Detected: {lastDetectedGesture} (Hold to input)
          </span>
        )}
      </div>
      <input
        type="text"
        readOnly
        value={currentGuess}
        className="w-full bg-gray-950 border-2 rounded-lg p-4 text-center text-3xl font-mono tracking-[1em] focus:outline-none transition-colors data-error:border-red-500 border-gray-700 focus:border-blue-500"
        placeholder="____"
      />
      {error && (
        <div className="absolute -bottom-6 left-0 right-0 text-center text-red-400 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputRow;

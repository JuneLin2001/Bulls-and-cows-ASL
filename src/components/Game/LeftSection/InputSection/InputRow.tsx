import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const HOLD_DURATION_MS = 1000;

interface InputRowProps {
  lastDetectedGesture: string | null;
  currentGuess: string;
  error: string | null;
  appendDigit: (digit: string) => void;
  submitGuess: () => void;
}

const InputRow: React.FC<InputRowProps> = ({
  lastDetectedGesture,
  currentGuess,
  error,
  appendDigit,
  submitGuess,
}) => {
  const holdStartTimeRef = useRef<number | null>(null);
  const lastGestureRef = useRef<string | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (lastDetectedGesture !== lastGestureRef.current) {
      holdStartTimeRef.current = lastDetectedGesture ? Date.now() : null;
      lastGestureRef.current = lastDetectedGesture;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = "0%";
      }
    }

    if (!lastDetectedGesture) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const updateProgress = () => {
      if (!holdStartTimeRef.current || !lastDetectedGesture) return;

      const elapsed = Date.now() - holdStartTimeRef.current;
      const progress = Math.min(elapsed / HOLD_DURATION_MS, 1);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      if (progress >= 1) {
        if (currentGuess.includes(lastDetectedGesture)) {
          toast.error(`Digit ${lastDetectedGesture} already used`);
        } else {
          appendDigit(lastDetectedGesture);
        }

        holdStartTimeRef.current = Date.now();
        if (progressBarRef.current) {
          progressBarRef.current.style.width = "0%";
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [lastDetectedGesture, appendDigit, currentGuess]);

  useEffect(() => {
    if (currentGuess.length === 4) {
      submitGuess();
    }
  }, [currentGuess, submitGuess]);

  return (
    <div className="relative">
      <div className="mb-2 h-6 text-center">
        {lastDetectedGesture && (
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-blue-400">
              Detected: {lastDetectedGesture}
            </span>
            <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-700">
              <div
                ref={progressBarRef}
                className="h-full bg-blue-500"
                style={{ width: "0%" }}
              />
            </div>
          </div>
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

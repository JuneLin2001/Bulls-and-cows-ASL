import InputRow from "./InputRow";
import InputKeypad from "./InputKeypad";

interface InputSectionProps {
  lastDetectedGesture: string | null;
  currentGuess: string;
  error: string | null;
  appendDigit: (digit: string) => void;
  backspace: () => void;
  submitGuess: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  lastDetectedGesture,
  currentGuess,
  error,
  appendDigit,
  backspace,
  submitGuess,
}) => {
  return (
    <>
      <InputRow
        currentGuess={currentGuess}
        error={error}
        lastDetectedGesture={lastDetectedGesture}
      />
      <InputKeypad
        currentGuess={currentGuess}
        appendDigit={appendDigit}
        backspace={backspace}
        submitGuess={submitGuess}
      />
    </>
  );
};

export default InputSection;

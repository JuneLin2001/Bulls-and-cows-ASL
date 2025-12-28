import InputRow from "./InputRow";
import InputKeypad from "./InputKeypad";

interface InputSectionProps {
  lastDetectedGesture: string | null;
}

const InputSection: React.FC<InputSectionProps> = ({ lastDetectedGesture }) => {
  return (
    <>
      <InputRow lastDetectedGesture={lastDetectedGesture} />
      <InputKeypad />
    </>
  );
};

export default InputSection;

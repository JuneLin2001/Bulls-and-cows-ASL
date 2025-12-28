import WebcamView from "./WebcamView";
import HowToPlay from "./HowToPlay";

interface RightSectionProps {
  setLastDetectedGesture: (gesture: string | null) => void;
}

const RightSection: React.FC<RightSectionProps> = ({
  setLastDetectedGesture,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl p-1 border border-gray-800 shadow-xl">
        <WebcamView onGestureDetected={setLastDetectedGesture} />
      </div>
      <HowToPlay />
    </div>
  );
};

export default RightSection;

import WebcamView from "./WebcamView";

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

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-gray-300">How to Play</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>
            • <strong className="text-gray-200">Goal:</strong> Guess the 4-digit
            secret code.
          </li>
          <li>
            • <strong className="text-green-400">Bull:</strong> Correct digit in
            the correct position.
          </li>
          <li>
            • <strong className="text-yellow-400">Cow:</strong> Correct digit
            but in the wrong position.
          </li>
          <li>
            • Use
            <strong className="text-blue-400">ASL Hand Signs (0-9)</strong> to
            input numbers via webcam.
          </li>
          <li>• Hold a gesture steady to input the number.</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSection;

import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Game = () => {
  const [lastDetectedGesture, setLastDetectedGesture] = useState<string | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LeftSection lastDetectedGesture={lastDetectedGesture} />
        <RightSection setLastDetectedGesture={setLastDetectedGesture} />
      </div>
    </div>
  );
};

export default Game;

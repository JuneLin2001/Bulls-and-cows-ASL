import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Game = () => {
  const [lastDetectedGesture, setLastDetectedGesture] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-gray-950 p-4 font-sans text-gray-100 md:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <LeftSection lastDetectedGesture={lastDetectedGesture} />
        <RightSection setLastDetectedGesture={setLastDetectedGesture} />
      </div>
    </div>
  );
};

export default Game;

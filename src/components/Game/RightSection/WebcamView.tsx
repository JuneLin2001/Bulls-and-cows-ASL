import { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { useHandDetection } from "@/hooks/useHandDetection";

interface WebcamViewProps {
  onGestureDetected: (gesture: string | null) => void;
}

const WebcamView: React.FC<WebcamViewProps> = ({ onGestureDetected }) => {
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { prediction, isLoading, error } = useHandDetection(
    webcamRef,
    canvasRef
  );

  useEffect(() => {
    onGestureDetected(prediction);
  }, [prediction, onGestureDetected]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-700">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900/90 z-20 text-white p-4 text-center">
          <div>
            <p className="font-bold text-lg mb-2">Error Loading Model</p>
            <p className="text-sm opacity-90">{error}</p>
          </div>
        </div>
      )}
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20 text-white">
          Loading Hand Detection Model...
        </div>
      )}

      <Webcam
        ref={webcamRef}
        audio={false}
        className="w-full h-full object-cover"
        mirrored={true}
        videoConstraints={{
          width: 640,
          height: 480,
          facingMode: "user",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      />

      <div className="absolute bottom-4 left-4 z-20 bg-black/50 px-4 py-2 rounded text-white font-mono text-xl">
        Detected:{" "}
        <span className="text-green-400 font-bold">{prediction || "-"}</span>
      </div>
    </div>
  );
};

export default WebcamView;

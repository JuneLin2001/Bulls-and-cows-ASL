import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import { predictGesture } from "@/lib/gestureClassifier";
import WebcamProps from "react-webcam";

export function useHandDetection(
  webcamRef: React.RefObject<WebcamProps>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const detectorRef = useRef<handPoseDetection.HandDetector | null>(null);
  const requestRef = useRef<number>(0);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detect = async () => {
      if (!webcamRef.current.video) return;

      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        video.width = videoWidth;
        video.height = videoHeight;

        if (canvasRef.current) {
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;
        }

        if (detectorRef.current) {
          const hands = await detectorRef.current.estimateHands(video);

          if (hands.length > 0) {
            const keypoints = hands[0].keypoints;
            const gesture = predictGesture(keypoints);
            setPrediction(gesture);

            const ctx = canvasRef.current?.getContext("2d");
            if (ctx) {
              drawHand(ctx, keypoints);
            }
          } else {
            setPrediction(null);
            const ctx = canvasRef.current?.getContext("2d");
            if (ctx) ctx.clearRect(0, 0, videoWidth, videoHeight);
          }
        }
      }
      requestRef.current = requestAnimationFrame(detect);
    };

    const runHandpose = async () => {
      try {
        await tf.ready();
        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig = {
          runtime: "tfjs",
          modelType: "full",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;

        detectorRef.current = await handPoseDetection.createDetector(
          model,
          detectorConfig
        );
        setIsLoading(false);
        detect();
      } catch (err) {
        console.error("Failed to load hand detection model:", err);
        setError(err instanceof Error ? err.message : "Failed to load model");
        setIsLoading(false);
      }
    };

    runHandpose();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [canvasRef, webcamRef]);

  return { prediction, isLoading, error };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function drawHand(ctx: CanvasRenderingContext2D, keypoints: any[]) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "#00FF00";
  for (let i = 0; i < keypoints.length; i++) {
    const x = keypoints[i].x;
    const y = keypoints[i].y;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Keypoint indices from MediaPipe Hands
// 0: wrist
// 1-4: thumb (1: cmc, 2: mcp, 3: ip, 4: tip)
// 5-8: index (5: mcp, 6: pip, 7: dip, 8: tip)
// 9-12: middle
// 13-16: ring
// 17-20: pinky

type Keypoint = { x: number; y: number; z?: number; name?: string };

function getDistance(p1: Keypoint, p2: Keypoint): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function predictGesture(keypoints: Keypoint[]): string | null {
  if (!keypoints || keypoints.length < 21) return null;

  const thumbTip = keypoints[4];
  const indexTip = keypoints[8];
  const middleTip = keypoints[12];
  const ringTip = keypoints[16];
  const pinkyTip = keypoints[20];

  const thumbIp = keypoints[3];
  const indexPip = keypoints[6];
  const middlePip = keypoints[10];
  const ringPip = keypoints[14];
  const pinkyPip = keypoints[18];

  const wrist = keypoints[0];
  const middleMcp = keypoints[9];

  // Calculate hand scale (distance from wrist to middle MCP)
  const handScale = getDistance(wrist, middleMcp);
  // Threshold for "touching" is 20% of hand scale
  const touchThreshold = handScale * 0.2;

  const isIndexExtended = indexTip.y < indexPip.y;
  const isMiddleExtended = middleTip.y < middlePip.y;
  const isRingExtended = ringTip.y < ringPip.y;
  const isPinkyExtended = pinkyTip.y < pinkyPip.y;

  // Thumb extended check: tip is higher than IP (upright hand)
  // OR tip is far from index MCP (x-axis)
  // Let's stick to Y-axis for simplicity in "upright" pose, but ASL often has hand rotated.
  // A better check for thumb extension might be distance from pinky MCP?
  // Let's keep it simple for now.
  const isThumbExtended = thumbTip.y < thumbIp.y;

  // ASL Numbers Logic

  // 0: O shape.
  if (
    !isIndexExtended &&
    !isMiddleExtended &&
    !isRingExtended &&
    !isPinkyExtended
  ) {
    if (getDistance(thumbTip, indexTip) < touchThreshold) return "0";
    return "0"; // Fallback for closed fist often being 0/A/S
  }

  // 1: Index extended.
  if (
    isIndexExtended &&
    !isMiddleExtended &&
    !isRingExtended &&
    !isPinkyExtended
  ) {
    return "1";
  }

  // 2: Index + Middle extended.
  if (
    isIndexExtended &&
    isMiddleExtended &&
    !isRingExtended &&
    !isPinkyExtended
  ) {
    return "2";
  }

  // 3: Thumb + Index + Middle extended.
  if (
    isThumbExtended &&
    isIndexExtended &&
    isMiddleExtended &&
    !isRingExtended &&
    !isPinkyExtended
  ) {
    return "3";
  }

  // 4: Four fingers extended.
  if (
    isIndexExtended &&
    isMiddleExtended &&
    isRingExtended &&
    isPinkyExtended &&
    !isThumbExtended
  ) {
    return "4";
  }

  // 5: All extended.
  if (
    isIndexExtended &&
    isMiddleExtended &&
    isRingExtended &&
    isPinkyExtended &&
    isThumbExtended
  ) {
    return "5";
  }

  // 6: Pinky touches Thumb.
  if (
    isIndexExtended &&
    isMiddleExtended &&
    isRingExtended &&
    !isPinkyExtended
  ) {
    if (getDistance(thumbTip, pinkyTip) < touchThreshold) return "6";
  }

  // 7: Ring touches Thumb.
  if (
    isIndexExtended &&
    isMiddleExtended &&
    !isRingExtended &&
    isPinkyExtended
  ) {
    if (getDistance(thumbTip, ringTip) < touchThreshold) return "7";
  }

  // 8: Middle touches Thumb.
  if (
    isIndexExtended &&
    !isMiddleExtended &&
    isRingExtended &&
    isPinkyExtended
  ) {
    if (getDistance(thumbTip, middleTip) < touchThreshold) return "8";
  }

  // 9: Index touches Thumb.
  if (
    !isIndexExtended &&
    isMiddleExtended &&
    isRingExtended &&
    isPinkyExtended
  ) {
    if (getDistance(thumbTip, indexTip) < touchThreshold) return "9";
  }

  return null;
}

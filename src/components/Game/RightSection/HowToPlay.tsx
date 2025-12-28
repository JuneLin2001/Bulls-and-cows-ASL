const HowToPlay = () => {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-300">How to Play</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li>
          • <strong className="text-gray-200">Goal:</strong> Guess the 4-digit
          secret code.
        </li>
        <li>
          • <strong className="text-green-400">Bull:</strong> Correct digit in
          the correct position.
        </li>
        <li>
          • <strong className="text-yellow-400">Cow:</strong> Correct digit but
          in the wrong position.
        </li>
        <li>
          • Use{" "}
          <a
            href="https://en.wikipedia.org/wiki/American_Sign_Language"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            ASL Hand Signs (0-9)
          </a>{" "}
          to input numbers via webcam or use keypad.
        </li>
        <li>• Hold a gesture steady to input the number.</li>
      </ul>
    </div>
  );
};

export default HowToPlay;

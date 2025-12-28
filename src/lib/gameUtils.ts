export function generateSecret(): string {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  return digits.slice(0, 4).join("");
}

export function checkGuess(
  secret: string,
  guess: string,
): { cows: number; bulls: number } {
  let bulls = 0;
  let cows = 0;

  console.log({ secret });

  if (guess.length !== 4) {
    throw new Error("Guess must be 4 digits");
  }

  const secretArr = secret.split("");
  const guessArr = guess.split("");

  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === secretArr[i]) {
      bulls++;
      secretArr[i] = "B";
      guessArr[i] = "X";
    }
  }

  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === "X") continue;

    const indexInSecret = secretArr.indexOf(guessArr[i]);
    if (indexInSecret !== -1) {
      cows++;
      secretArr[indexInSecret] = "C";
    }
  }

  return { cows, bulls };
}

export function isValidGuess(guess: string): boolean {
  if (!/^\d{4}$/.test(guess)) return false;
  const unique = new Set(guess.split(""));
  return unique.size === 4;
}

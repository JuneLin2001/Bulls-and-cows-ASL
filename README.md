# Bulls and Cows ASL

> A Bulls and Cows number guessing game with [American Sign Language (ASL)](#what-is-asl) hand gesture recognition.

Website Link: <URL HERE>  
Video Demo: <URL HERE>

### What is ASL

ASL, or American Sign Language, is a complete, natural visual language used primarily by Deaf and hard-of-hearing people in the U.S. and Canada, relying on handshapes, facial expressions, and body movements, not English words.

> Wikipedia: [American_Sign_Language](https://en.wikipedia.org/wiki/American_Sign_Language)

#### How to sign numbers in ASL

This is a tutorial from American Society for Deaf Children (ASDC).  
Everyone can got it for free in their website.

> [ASL numbers tutorial](https://deafchildren.org/2019/08/signing-numbers-in-asl)

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **MediaPipe Hand Pose Detection** - Hand landmark detection
- **react-webcam** - A Webcam component for React.

## Features

- Classic Bulls and Cows gameplay with a 4-digit secret code
- Real-time ASL hand gesture recognition using `TensorFlow.js`
- Webcam integration for hands-free input
- Alternative on-screen keypad for traditional input
- Visual feedback with Bulls (correct position) and Cows (wrong position)
- Celebration effects on winning

## How to Play

1. **Goal:** Guess the secret 4-digit code (each digit is unique, 0-9)
2. **Bull:** A correct digit in the correct position
3. **Cow:** A correct digit in the wrong position
4. **Input Methods:**
   - Show ASL number signs (0-9) to your webcam
   - Hold a gesture steady to confirm the input
   - Or use the on-screen keypad

## Getting Started

### Prerequisites

- A webcam (for ASL gesture input)

### Run Locally

```bash
git clone https://github.com/JuneLin2001/Bulls-and-cows-ASL.git
cd Bulls-and-cows-ASL
npm install
npm run dev
```

## Thoroughly Description

### Who I am

- I'm William, a full-stack developer. And I live in Taipei, Taiwan.
- My familiar tach stacks are React, TypeScript, TailwindCSS and Node.js, etc.
- My native language is Mandarin (Chinese), and I can speak some English.
- Feel free to reach me on [GitHub](https://github.com/JuneLin2001).

### When and where I did this project

- I did this project in 2025, in Harvard University CS50 lesson.
- This project is also my final project in CS50.

### Why I wanna do this project

- Because I'm intrested in AI and computer vision technologys. And I saw a package called `TensorFlow.js`. Which is a JavaScript library for Computer vision. So I want to try it.
- And I also wanna build a game for fun. So I decided to build this project.

### What else that I debated certain design choices

- First I have many ideas for the project.
  - Like a top-down-shooter game, or a snake game.
  - ( I really wanna make a game for the project LOL. )
- And the platform for the game is Web. Because I wanna practice my web-development skills.
- But I finally choose to build the Bulls and Cows game, and combined with ASL hand gesture recognition for practice new skills.

### How I did the project

- I used React and TypeScript for the frontend. Because I'm familiar with them. And for styling, I chosed to use TailwindCSS. Because it's simple and powerful.
- For the hand gesture recognition, And TensorFlow is famous in computer vision technologys. So I choosed `TensorFlow.js`. Because it's a JavaScript library version for `TensorFlow`.
- I used `Vite` to build the project. Because it's fast and easy to use.
- And I also used AI tools to help me. Like `ChatGPT`, `Claude`, `Antigravity` etc.
  - To be honest, they are so powerful that so scare me.
  - After I deside the tech stack, first I used `Antigravity` to build the main page. Then "Handcrafted" the details by my own. In the "Handcrafted" part, I also used AI tools to help me. ( So it may not be completely handcrafted. But it's 2025 and everyone is coding with AI now. )
- For the game logic, I decided to use a 4-digit secret code. Because it's the most common game in the world. And it's also a classic mode for Bulls and Cows.
- The reason I combined the game with ASL hand gesture recognition is because I want to make the game more interactive. And using Webcam is a good way to do it.
- The player will never lose the game. Because I think it is a little bit hard. So the player can try infinity times.

### How ASL Numbers 0–9 Are Distinguished in this Game

I used `MediaPipe Hand Pose Detection`. It provides 21 hand landmarks, including the wrist and joints of each finger. See [`src/lib/gestureClassifier.ts`](/src/lib/gestureClassifier.ts) for details

By analyzing the relative positions and distances between these landmarks, ASL number gestures from 0 to 9 can be classified using a rule-based approach.

Simply said that it produces a binary state **(extended / not extended)** for each finger.

#### ASL Numbers 0–9 Classification

- `0` No fingers are extended. The thumb tip is close to the index fingertip, forming an “O” shape.
- `1` Only the index finger is extended.
- `2` Index and middle fingers are extended. The thumb is not extended.
- `3` Thumb, index, and middle fingers are extended.
- `4` Index, middle, ring, and pinky fingers are extended. The thumb remains folded.
- `5` All fingers are extended.
- `6` Thumb touches the pinky.
- `7` Thumb touches the ring finger.
- `8` Thumb touches the middle finger.
- `9` Thumb touches the index finger.

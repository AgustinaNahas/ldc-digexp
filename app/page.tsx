"use client";

import { useState } from "react";
import { questions } from "./data/questions";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ThankYouScreen from "./components/ThankYouScreen";

type GameState = "start" | "playing" | "finished";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameState("finished");
    }
  };

  const handleRestart = () => {
    setGameState("start");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="h-screen bg-background ">
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && (
        <div className="h-full flex flex-col items-center justify-center">
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        </div>
      )}
      {gameState === "finished" && (
        <ThankYouScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

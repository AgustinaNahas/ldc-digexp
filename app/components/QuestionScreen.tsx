"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Question } from "../data/questions";
import ProgressBar from "./ProgressBar";
import FeedbackPanel from "./FeedbackPanel";

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export default function QuestionScreen({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuestionScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    onAnswer(isCorrect);
  };

  return (
    <div className="w-full h-full max-w-7xl mx-auto px-4 py-3 flex flex-col">
      {/* LDC Logo */}
      <div className="mb-2 flex justify-center flex-shrink-0">
        <Image
          src="/ldc.png"
          alt="LDC Logo"
          width={50}
          height={17}
          className="opacity-70 dark:opacity-60"
          priority
        />
      </div>
      
      <div className="mb-3 flex-shrink-0">
        <ProgressBar current={currentQuestion} total={totalQuestions} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Left Column - Question */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 md:p-6 animate-fade-in flex flex-col min-h-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white leading-tight tracking-tight flex-shrink-0">
            {question.question}
          </h2>
          
          <div className="space-y-2 mb-4 flex-1 min-h-0 overflow-y-auto">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectOption = index === question.correctAnswer;
              const showCorrect = showFeedback && isCorrectOption;
              const showIncorrect = showFeedback && isSelected && !isCorrect;
              
              let bgClass = "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600";
              if (showFeedback) {
                if (showCorrect) {
                  bgClass = "bg-green-500 text-white border-green-600";
                } else if (showIncorrect) {
                  bgClass = "bg-red-500 text-white border-red-600";
                } else {
                  bgClass = "bg-gray-100 dark:bg-gray-700 opacity-50 border-gray-200 dark:border-gray-600";
                }
              } else if (isSelected) {
                bgClass = "bg-[#1e3a5f] dark:bg-[#2d4d7a] text-white border-[#1e3a5f] dark:border-[#2d4d7a]";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-3 rounded-lg font-normal text-sm transition-all duration-200 transform flex-shrink-0 ${
                    showFeedback ? "" : "hover:scale-[1.01] hover:shadow-sm active:scale-[0.99]"
                  } ${bgClass} disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-between">
                    <span className="leading-snug">{option}</span>
                    {showFeedback && (
                      <span className="text-lg ml-3 flex-shrink-0">
                        {showCorrect ? "✓" : showIncorrect ? "✗" : ""}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {showFeedback && (
            <button
              onClick={handleNext}
              className="w-full px-4 py-2.5 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#2d4d7a] dark:bg-[#2d4d7a] dark:hover:bg-[#3d5d8a] rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 animate-fade-in flex-shrink-0"
            >
              {currentQuestion < totalQuestions ? "Siguiente pregunta →" : "Ver resultados"}
            </button>
          )}
        </div>

        {/* Right Column - Feedback */}
        {showFeedback && (
          <div className="h-full min-h-0">
            <FeedbackPanel
              isCorrect={isCorrect}
              correctAnswer={question.options[question.correctAnswer]}
              explanation={question.explanation}
              image={question.image}
            />
          </div>
        )}

      </div>
    </div>
  );
}

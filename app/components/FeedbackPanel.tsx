"use client";

import Image from "next/image";

interface FeedbackPanelProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  image?: string;
}

export default function FeedbackPanel({
  isCorrect,
  correctAnswer,
  explanation,
  image,
}: FeedbackPanelProps) {
  return (
    <div className={`h-full rounded-xl border-l-4 shadow-sm animate-fade-in flex flex-col min-h-0 ${
      isCorrect 
        ? "bg-green-50 dark:bg-green-900/20 border-green-500" 
        : "bg-red-50 dark:bg-red-900/20 border-red-500"
    }`}>
      <div className="p-4 md:p-6 h-full flex flex-col overflow-y-auto min-h-0">
        {/* Header */}
        <div className="mb-3 flex-shrink-0">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 ${
            isCorrect 
              ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300" 
              : "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
          }`}>
            <span className="text-lg">
              {isCorrect ? "✓" : "✗"}
            </span>
            <span className="font-semibold text-sm">
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </span>
          </div>
          
          {!isCorrect && (
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-2 mb-2 border border-gray-200 dark:border-gray-700">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5 uppercase tracking-wide">
                Respuesta correcta
              </p>
              <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                {correctAnswer}
              </p>
            </div>
          )}
        </div>

        {/* Image */}
        {image && (
          <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex-shrink-0">
            <Image
              src={image}
              alt="Ilustración"
              fill
              className="object-contain p-2"
            />
          </div>
        )}

        {/* Explanation */}
        <div className="flex-1 min-h-0">
          <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white flex items-center gap-1.5 flex-shrink-0">
            <span className="text-base">📚</span>
            <span>Explicación</span>
          </h3>
          <div className="bg-white dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700 overflow-y-auto">
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


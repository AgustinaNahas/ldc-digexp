interface ThankYouScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ThankYouScreen({
  score,
  totalQuestions,
  onRestart,
}: ThankYouScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="h-full flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 max-w-2xl w-full animate-fade-in">
        <div className="text-4xl mb-4">🎉</div>
        
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1e3a5f] dark:text-[#2d4d7a] tracking-tight leading-tight">
          ¡Gracias por jugar!
        </h1>
        
        <div className="mb-6">
          <p className="text-xs font-medium mb-2 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            Tu puntuación
          </p>
          <div className="text-4xl md:text-5xl font-semibold mb-2 text-[#1e3a5f] dark:text-[#2d4d7a] tracking-tight">
            {score}/{totalQuestions}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {percentage}% de respuestas correctas
          </div>
        </div>

        <div className="mb-6">
          <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1e3a5f] dark:bg-[#2d4d7a] rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {percentage >= 80
            ? "¡Excelente trabajo! Eres un verdadero experto. 🌟"
            : percentage >= 60
            ? "¡Buen trabajo! Sigue aprendiendo. 💪"
            : "No te desanimes, sigue practicando. ¡Lo lograrás! 🚀"}
        </p>

        <button
          onClick={onRestart}
          className="px-8 py-3 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#2d4d7a] dark:bg-[#2d4d7a] dark:hover:bg-[#3d5d8a] rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}


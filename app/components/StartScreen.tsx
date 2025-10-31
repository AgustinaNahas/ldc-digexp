import Image from "next/image";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 animate-fade-in">
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
          <Image
            src="/ldc.png"
            alt="Imagen principal"
            fill
            className="object-cover dark:invert"
            priority
          />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-[#1e3a5f] dark:text-[#2d4d7a] tracking-tight animate-slide-up leading-tight">
        Trivia Challenge
      </h1>
      
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-lg leading-relaxed animate-slide-up-delay font-normal">
        Pon a prueba tus conocimientos con nuestras 5 preguntas
      </p>
      
      <button
        onClick={onStart}
        className="px-8 py-3 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#2d4d7a] dark:bg-[#2d4d7a] dark:hover:bg-[#3d5d8a] rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 animate-bounce-slow"
      >
        Comenzar
      </button>
    </div>
  );
}


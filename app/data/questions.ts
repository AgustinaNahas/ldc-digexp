export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Tierra", "Júpiter", "Saturno", "Neptuno"],
    correctAnswer: 1,
    explanation: "Júpiter es el planeta más grande del sistema solar. Tiene un diámetro de aproximadamente 142,984 km, lo que lo hace más grande que todos los demás planetas combinados. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio. Su tamaño masivo también lo convierte en el planeta con la gravedad más fuerte después del Sol.",
    image: "/globe.svg",
  },
  {
    id: 2,
    question: "¿En qué año llegó el hombre a la luna?",
    options: ["1965", "1969", "1971", "1973"],
    correctAnswer: 1,
    explanation: "El 20 de julio de 1969, la misión Apolo 11 de la NASA logró el primer aterrizaje tripulado en la Luna. Neil Armstrong fue el primer humano en pisar la superficie lunar, seguido por Buzz Aldrin, mientras que Michael Collins permaneció en órbita lunar. Este histórico evento marcó un hito en la exploración espacial y demostró la capacidad tecnológica de la humanidad.",
    image: "/globe.svg",
  },
  {
    id: 3,
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correctAnswer: 3,
    explanation: "El Océano Pacífico es el más grande del mundo, cubriendo aproximadamente un tercio de la superficie de la Tierra (alrededor de 165 millones de km²). Se extiende desde el Ártico hasta la Antártida y está bordeado por Asia y Australia al oeste, y las Américas al este. Su nombre se deriva del término 'pacificus' que significa 'tranquilo', aunque paradójicamente contiene muchas zonas de alta actividad sísmica y volcánica.",
    image: "/globe.svg",
  },
  {
    id: 4,
    question: "¿Cuántos continentes hay en el mundo?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Hay 7 continentes en el mundo: Asia, África, América del Norte, América del Sur, Antártida, Europa y Oceanía. Sin embargo, esta división puede variar según el modelo geográfico utilizado. Algunos modelos consideran Europa y Asia como un solo continente (Eurasia), mientras que otros separan América del Norte y del Sur. El modelo más comúnmente aceptado en la actualidad reconoce 7 continentes.",
    image: "/globe.svg",
  },
  {
    id: 5,
    question: "¿Cuál es el animal más rápido del mundo?",
    options: ["León", "Guepardo", "Tigre", "Leopardo"],
    correctAnswer: 1,
    explanation: "El guepardo (también conocido como chita) es el animal terrestre más rápido del mundo, capaz de alcanzar velocidades de hasta 110-120 km/h en carreras cortas de aproximadamente 400-500 metros. Su cuerpo está especialmente adaptado para la velocidad: tiene patas largas y delgadas, una columna vertebral flexible, y grandes fosas nasales para maximizar el oxígeno. Aunque es el más rápido en tierra, el halcón peregrino es aún más rápido en el aire, alcanzando más de 300 km/h en picada.",
    image: "/globe.svg",
  },
];


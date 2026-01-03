import { Quiz, QuizAttempt } from "@/types/quiz";

const STORAGE_KEY = "quizmaker_quizzes";
const ATTEMPTS_KEY = "quizmaker_attempts";

// Sample quizzes for demo
const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    title: "World Geography",
    description: "Test your knowledge of countries, capitals, and landmarks around the world!",
    questions: [
      {
        id: "q1",
        text: "What is the capital of France?",
        answers: [
          { id: "a1", text: "London", isCorrect: false },
          { id: "a2", text: "Paris", isCorrect: true },
          { id: "a3", text: "Berlin", isCorrect: false },
          { id: "a4", text: "Madrid", isCorrect: false },
        ],
      },
      {
        id: "q2",
        text: "Which is the largest ocean on Earth?",
        answers: [
          { id: "a1", text: "Atlantic Ocean", isCorrect: false },
          { id: "a2", text: "Indian Ocean", isCorrect: false },
          { id: "a3", text: "Pacific Ocean", isCorrect: true },
          { id: "a4", text: "Arctic Ocean", isCorrect: false },
        ],
      },
      {
        id: "q3",
        text: "In which country would you find the Great Barrier Reef?",
        answers: [
          { id: "a1", text: "Brazil", isCorrect: false },
          { id: "a2", text: "Australia", isCorrect: true },
          { id: "a3", text: "Indonesia", isCorrect: false },
          { id: "a4", text: "Thailand", isCorrect: false },
        ],
      },
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Science Basics",
    description: "A fun quiz covering fundamental concepts in physics, chemistry, and biology.",
    questions: [
      {
        id: "q1",
        text: "What is the chemical symbol for water?",
        answers: [
          { id: "a1", text: "O2", isCorrect: false },
          { id: "a2", text: "H2O", isCorrect: true },
          { id: "a3", text: "CO2", isCorrect: false },
          { id: "a4", text: "NaCl", isCorrect: false },
        ],
      },
      {
        id: "q2",
        text: "How many planets are in our solar system?",
        answers: [
          { id: "a1", text: "7", isCorrect: false },
          { id: "a2", text: "8", isCorrect: true },
          { id: "a3", text: "9", isCorrect: false },
          { id: "a4", text: "10", isCorrect: false },
        ],
      },
      {
        id: "q3",
        text: "What is the powerhouse of the cell?",
        answers: [
          { id: "a1", text: "Nucleus", isCorrect: false },
          { id: "a2", text: "Ribosome", isCorrect: false },
          { id: "a3", text: "Mitochondria", isCorrect: true },
          { id: "a4", text: "Golgi apparatus", isCorrect: false },
        ],
      },
    ],
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    title: "Pop Culture 2024",
    description: "How well do you know movies, music, and trending topics?",
    questions: [
      {
        id: "q1",
        text: "Which film won Best Picture at the 2024 Oscars?",
        answers: [
          { id: "a1", text: "Barbie", isCorrect: false },
          { id: "a2", text: "Oppenheimer", isCorrect: true },
          { id: "a3", text: "Killers of the Flower Moon", isCorrect: false },
          { id: "a4", text: "Poor Things", isCorrect: false },
        ],
      },
      {
        id: "q2",
        text: "What social media platform was formerly known as Twitter?",
        answers: [
          { id: "a1", text: "Threads", isCorrect: false },
          { id: "a2", text: "Bluesky", isCorrect: false },
          { id: "a3", text: "X", isCorrect: true },
          { id: "a4", text: "Mastodon", isCorrect: false },
        ],
      },
    ],
    createdAt: new Date("2024-03-10"),
  },
];

export const getQuizzes = (): Quiz[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);
    return parsed.map((q: Quiz) => ({
      ...q,
      createdAt: new Date(q.createdAt),
    }));
  }
  // Initialize with sample quizzes
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleQuizzes));
  return sampleQuizzes;
};

export const getQuizById = (id: string): Quiz | undefined => {
  const quizzes = getQuizzes();
  return quizzes.find((q) => q.id === id);
};

export const saveQuiz = (quiz: Quiz): void => {
  const quizzes = getQuizzes();
  quizzes.push(quiz);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
};

export const saveAttempt = (attempt: QuizAttempt): void => {
  const attempts = getAttempts();
  attempts.push(attempt);
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
};

export const getAttempts = (): QuizAttempt[] => {
  const stored = localStorage.getItem(ATTEMPTS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

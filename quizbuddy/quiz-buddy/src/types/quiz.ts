export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: Date;
  createdBy?: string;
}

export interface QuizAttempt {
  quizId: string;
  answers: Record<string, string>; // questionId -> answerId
  score: number;
  totalQuestions: number;
  completedAt: Date;
}

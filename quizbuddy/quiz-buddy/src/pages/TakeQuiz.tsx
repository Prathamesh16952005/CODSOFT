import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionDisplay } from "@/components/quiz/QuestionDisplay";
import { getQuizById, saveAttempt, generateId } from "@/stores/quizStore";
import { Quiz, QuizAttempt } from "@/types/quiz";
import { ArrowLeft, ArrowRight, Play, HelpCircle, Clock } from "lucide-react";

const TakeQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    if (id) {
      const foundQuiz = getQuizById(id);
      if (foundQuiz) {
        setQuiz(foundQuiz);
      } else {
        navigate("/browse");
      }
    }
  }, [id, navigate]);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];
  const isLastQuestion = currentIndex === quiz.questions.length - 1;
  const hasAnswered = currentQuestion && answers[currentQuestion.id];

  const handleAnswer = (answerId: string) => {
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: answerId,
      }));
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate score and navigate to results
      let score = 0;
      quiz.questions.forEach((q) => {
        const selectedAnswerId = answers[q.id];
        const correctAnswer = q.answers.find((a) => a.isCorrect);
        if (selectedAnswerId && correctAnswer && selectedAnswerId === correctAnswer.id) {
          score++;
        }
      });

      const attempt: QuizAttempt = {
        quizId: quiz.id,
        answers,
        score,
        totalQuestions: quiz.questions.length,
        completedAt: new Date(),
      };

      saveAttempt(attempt);
      navigate(`/results/${quiz.id}`, { state: { attempt } });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Pre-quiz screen
  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-xl mx-auto">
            <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to quizzes
            </Link>
            
            <Card className="overflow-hidden">
              <div className="h-3 gradient-hero" />
              <CardContent className="p-8 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3">{quiz.title}</h1>
                <p className="text-muted-foreground mb-8">{quiz.description}</p>
                
                <div className="flex justify-center gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <HelpCircle className="h-5 w-5" />
                    <span>{quiz.questions.length} questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>~{quiz.questions.length * 30}s</span>
                  </div>
                </div>
                
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setStarted(true)}
                  className="gap-2 w-full sm:w-auto"
                >
                  <Play className="h-5 w-5" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={currentIndex} total={quiz.questions.length} />
          
          <Card className="mt-8">
            <CardContent className="p-6 sm:p-10">
              <QuestionDisplay
                key={currentQuestion.id}
                question={currentQuestion}
                onAnswer={handleAnswer}
                selectedAnswer={answers[currentQuestion.id]}
              />
            </CardContent>
          </Card>
          
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button
              variant={isLastQuestion ? "hero" : "default"}
              onClick={handleNext}
              disabled={!hasAnswered}
              className="gap-2"
            >
              {isLastQuestion ? "Finish Quiz" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TakeQuiz;

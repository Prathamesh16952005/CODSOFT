import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScoreDisplay } from "@/components/quiz/ScoreDisplay";
import { getQuizById } from "@/stores/quizStore";
import { Quiz, QuizAttempt } from "@/types/quiz";
import { Home, RotateCcw, List, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const attempt = location.state?.attempt as QuizAttempt | undefined;

  useEffect(() => {
    if (id) {
      const foundQuiz = getQuizById(id);
      if (foundQuiz) {
        setQuiz(foundQuiz);
      }
    }
    
    if (!attempt) {
      navigate("/browse");
    }
  }, [id, attempt, navigate]);

  if (!quiz || !attempt) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Score Card */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-2 gradient-hero" />
            <CardContent className="p-8 sm:p-12">
              <ScoreDisplay score={attempt.score} total={attempt.totalQuestions} />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link to={`/quiz/${quiz.id}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
            </Link>
            <Link to="/browse" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <List className="h-4 w-4" />
                More Quizzes
              </Button>
            </Link>
            <Link to="/" className="flex-1">
              <Button variant="hero" className="w-full gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
          </div>

          {/* Answer Review */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Review Answers</h3>
            
            {quiz.questions.map((question, index) => {
              const selectedAnswerId = attempt.answers[question.id];
              const correctAnswer = question.answers.find((a) => a.isCorrect);
              const selectedAnswer = question.answers.find((a) => a.id === selectedAnswerId);
              const isCorrect = selectedAnswerId === correctAnswer?.id;

              return (
                <Card
                  key={question.id}
                  className={cn(
                    "animate-fade-in overflow-hidden",
                    isCorrect ? "border-success/30" : "border-destructive/30"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={cn("h-1", isCorrect ? "gradient-success" : "bg-destructive")} />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                          isCorrect ? "gradient-success" : "bg-destructive"
                        )}
                      >
                        {isCorrect ? (
                          <Check className="h-4 w-4 text-success-foreground" />
                        ) : (
                          <X className="h-4 w-4 text-destructive-foreground" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Question {index + 1}
                        </p>
                        <p className="font-semibold">{question.text}</p>
                      </div>
                    </div>

                    <div className="space-y-2 ml-11">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Your answer:</span>
                        <span className={cn("font-medium", isCorrect ? "text-success" : "text-destructive")}>
                          {selectedAnswer?.text || "No answer"}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Correct answer:</span>
                          <span className="font-medium text-success">
                            {correctAnswer?.text}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizResults;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question, Answer, Quiz } from "@/types/quiz";
import { saveQuiz, generateId } from "@/stores/quizStore";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Check, PenLine, Save, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([
    { id: generateId(), text: "", isCorrect: false },
    { id: generateId(), text: "", isCorrect: false },
    { id: generateId(), text: "", isCorrect: false },
    { id: generateId(), text: "", isCorrect: false },
  ]);

  const handleAnswerChange = (id: string, text: string) => {
    setCurrentAnswers((prev) =>
      prev.map((a) => (a.id === id ? { ...a, text } : a))
    );
  };

  const handleCorrectChange = (id: string) => {
    setCurrentAnswers((prev) =>
      prev.map((a) => ({ ...a, isCorrect: a.id === id }))
    );
  };

  const addQuestion = () => {
    if (!currentQuestion.trim()) {
      toast({ title: "Please enter a question", variant: "destructive" });
      return;
    }

    const filledAnswers = currentAnswers.filter((a) => a.text.trim());
    if (filledAnswers.length < 2) {
      toast({ title: "Please add at least 2 answers", variant: "destructive" });
      return;
    }

    const hasCorrect = filledAnswers.some((a) => a.isCorrect);
    if (!hasCorrect) {
      toast({ title: "Please select a correct answer", variant: "destructive" });
      return;
    }

    const newQuestion: Question = {
      id: generateId(),
      text: currentQuestion,
      answers: filledAnswers,
    };

    setQuestions((prev) => [...prev, newQuestion]);
    setCurrentQuestion("");
    setCurrentAnswers([
      { id: generateId(), text: "", isCorrect: false },
      { id: generateId(), text: "", isCorrect: false },
      { id: generateId(), text: "", isCorrect: false },
      { id: generateId(), text: "", isCorrect: false },
    ]);

    toast({ title: "Question added!" });
  };

  const removeQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      toast({ title: "Please enter a quiz title", variant: "destructive" });
      return;
    }

    if (questions.length === 0) {
      toast({ title: "Please add at least one question", variant: "destructive" });
      return;
    }

    const quiz: Quiz = {
      id: generateId(),
      title: title.trim(),
      description: description.trim() || "A fun quiz to test your knowledge!",
      questions,
      createdAt: new Date(),
    };

    saveQuiz(quiz);
    toast({ title: "Quiz created successfully!" });
    navigate(`/quiz/${quiz.id}`);
  };

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl gradient-hero mb-4 shadow-lg">
              <PenLine className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Create a Quiz</h1>
            <p className="text-muted-foreground text-lg">
              Build an engaging quiz in minutes
            </p>
          </div>

          {/* Quiz Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Quiz Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <Input
                  placeholder="Enter quiz title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description (optional)</label>
                <Textarea
                  placeholder="What's your quiz about?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Added Questions */}
          {questions.length > 0 && (
            <div className="mb-6 space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full gradient-hero text-xs text-primary-foreground font-bold">
                  {questions.length}
                </span>
                Questions Added
              </h3>
              {questions.map((q, index) => (
                <Card key={q.id} className="animate-scale-in">
                  <CardContent className="p-4 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-muted-foreground mb-1">
                        Question {index + 1}
                      </p>
                      <p className="font-semibold truncate">{q.text}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {q.answers.length} answers • Correct: {q.answers.find(a => a.isCorrect)?.text}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeQuestion(q.id)}
                      className="shrink-0 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Add Question Form */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Add a Question</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Question</label>
                <Textarea
                  placeholder="Enter your question..."
                  value={currentQuestion}
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                  className="resize-none"
                  rows={2}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">
                  Answers (click to mark correct)
                </label>
                <div className="grid gap-3">
                  {currentAnswers.map((answer, index) => (
                    <div
                      key={answer.id}
                      className="flex items-center gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => handleCorrectChange(answer.id)}
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold transition-all",
                          answer.isCorrect
                            ? "gradient-success text-success-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                      >
                        {answer.isCorrect ? <Check className="h-5 w-5" /> : optionLetters[index]}
                      </button>
                      <Input
                        placeholder={`Answer ${optionLetters[index]}...`}
                        value={answer.text}
                        onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Click a letter to mark it as the correct answer
                </p>
              </div>

              <Button onClick={addQuestion} variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" />
                Add Question
              </Button>
            </CardContent>
          </Card>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            variant="hero"
            size="xl"
            className="w-full gap-2"
            disabled={!title.trim() || questions.length === 0}
          >
            <Save className="h-5 w-5" />
            Create Quiz
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CreateQuiz;

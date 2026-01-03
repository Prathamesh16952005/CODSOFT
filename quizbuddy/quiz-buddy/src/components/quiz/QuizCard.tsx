import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";
import { Play, HelpCircle, Calendar } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  index?: number;
}

export const QuizCard = ({ quiz, index = 0 }: QuizCardProps) => {
  const formattedDate = quiz.createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card 
      className="group overflow-hidden hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-2 gradient-hero" />
      <CardHeader className="pb-3">
        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
          {quiz.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
          {quiz.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4" />
            {quiz.questions.length} questions
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
        </div>
        <Link to={`/quiz/${quiz.id}`}>
          <Button className="w-full gap-2 group-hover:shadow-md transition-shadow">
            <Play className="h-4 w-4" />
            Start Quiz
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

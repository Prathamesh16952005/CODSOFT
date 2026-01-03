import { useState } from "react";
import { Question } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface QuestionDisplayProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  selectedAnswer?: string;
}

export const QuestionDisplay = ({
  question,
  onAnswer,
  selectedAnswer,
}: QuestionDisplayProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center leading-tight">
        {question.text}
      </h2>
      
      <div className="grid gap-3 sm:gap-4">
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswer === answer.id;
          const isHovered = hoveredId === answer.id;

          return (
            <button
              key={answer.id}
              onClick={() => onAnswer(answer.id)}
              onMouseEnter={() => setHoveredId(answer.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50",
                isHovered && !isSelected && "scale-[1.02]"
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold transition-all",
                  isSelected
                    ? "gradient-hero text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {isSelected ? <Check className="h-5 w-5" /> : optionLetters[index]}
              </div>
              <span className={cn(
                "text-base sm:text-lg font-medium",
                isSelected ? "text-foreground" : "text-foreground/80"
              )}>
                {answer.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

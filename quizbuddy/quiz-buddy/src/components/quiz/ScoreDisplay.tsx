import { Trophy, Star, Target, Frown, Meh, Smile, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScoreDisplayProps {
  score: number;
  total: number;
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreData = () => {
    if (percentage === 100) {
      return {
        icon: PartyPopper,
        message: "Perfect Score!",
        subMessage: "You're a genius! 🎉",
        gradient: "gradient-success",
        textColor: "text-success",
      };
    } else if (percentage >= 80) {
      return {
        icon: Trophy,
        message: "Excellent!",
        subMessage: "Almost there!",
        gradient: "gradient-hero",
        textColor: "text-primary",
      };
    } else if (percentage >= 60) {
      return {
        icon: Smile,
        message: "Good Job!",
        subMessage: "Keep practicing!",
        gradient: "bg-accent",
        textColor: "text-accent",
      };
    } else if (percentage >= 40) {
      return {
        icon: Meh,
        message: "Not Bad",
        subMessage: "Room for improvement",
        gradient: "bg-muted",
        textColor: "text-muted-foreground",
      };
    } else {
      return {
        icon: Target,
        message: "Keep Trying!",
        subMessage: "Practice makes perfect",
        gradient: "bg-muted",
        textColor: "text-muted-foreground",
      };
    }
  };

  const { icon: Icon, message, subMessage, gradient, textColor } = getScoreData();

  return (
    <div className="flex flex-col items-center text-center animate-celebrate">
      <div className={cn("flex h-24 w-24 items-center justify-center rounded-2xl mb-6 shadow-lg", gradient)}>
        <Icon className="h-12 w-12 text-primary-foreground" />
      </div>
      
      <h2 className="text-3xl font-bold mb-2">{message}</h2>
      <p className="text-muted-foreground mb-6">{subMessage}</p>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className={cn("text-6xl sm:text-7xl font-extrabold", textColor)}>
          {score}
        </span>
        <span className="text-2xl text-muted-foreground font-medium">/ {total}</span>
      </div>
      
      <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
        <Star className="h-5 w-5 text-accent" />
        <span>{percentage}% correct</span>
      </div>
    </div>
  );
};

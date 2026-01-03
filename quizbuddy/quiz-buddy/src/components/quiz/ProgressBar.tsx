interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-medium text-foreground">
          Question {current + 1} of {total}
        </span>
        <span className="text-muted-foreground">{Math.round(progress)}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full gradient-hero transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

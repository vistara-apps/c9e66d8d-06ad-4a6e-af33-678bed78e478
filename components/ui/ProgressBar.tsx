import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  variant?: 'success' | 'warning' | 'disabled';
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  max,
  variant = 'success',
  className,
  showLabel = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const variants = {
    success: 'bg-accent',
    warning: 'bg-yellow-500',
    disabled: 'bg-muted',
  };

  return (
    <div className={cn('space-y-2', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${value.toLocaleString()}</span>
          <span>${max.toLocaleString()}</span>
        </div>
      )}
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={cn('h-2 rounded-full transition-all duration-300', variants[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-center text-sm text-muted-foreground">
          {percentage.toFixed(1)}% Complete
        </div>
      )}
    </div>
  );
}

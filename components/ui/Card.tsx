import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'interactive' | 'elevated';
  onClick?: () => void;
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  onClick 
}: CardProps) {
  const baseStyles = 'bg-surface border border-border rounded-lg p-6';
  
  const variants = {
    default: '',
    interactive: 'hover:bg-surface/80 cursor-pointer transition-colors duration-200',
    elevated: 'shadow-card',
  };

  return (
    <div 
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

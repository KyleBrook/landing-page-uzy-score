import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
}

const GlassCard = ({ children, className, blur = 'md' }: GlassCardProps) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };

  return (
    <div className={cn(
      'bg-white/10 border border-white/20 rounded-2xl shadow-xl',
      blurClasses[blur],
      'hover:bg-white/15 transition-all duration-300',
      className
    )}>
      {children}
    </div>
  );
};

export default GlassCard;
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScoreCircleProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ScoreCircle = ({ score, maxScore = 1000, size = 'md', className }: ScoreCircleProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-400';
    if (score >= 600) return 'text-yellow-400';
    if (score >= 400) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStrokeColor = (score: number) => {
    if (score >= 800) return 'stroke-green-400';
    if (score >= 600) return 'stroke-yellow-400';
    if (score >= 400) return 'stroke-orange-400';
    return 'stroke-red-400';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = score / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= score) {
          current = score;
          clearInterval(interval);
        }
        setAnimatedScore(Math.floor(current));
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className={cn('relative flex items-center justify-center', sizeClasses[size], className)}>
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="45"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-white/20"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn('transition-all duration-1000 ease-out', getStrokeColor(score))}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn('font-bold', textSizes[size], getScoreColor(score))}>
          {animatedScore}
        </span>
        <span className="text-white/60 text-xs">SCORE</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
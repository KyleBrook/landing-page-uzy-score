import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Lock, Sparkles, Target, Trophy } from "lucide-react";

interface QuizGameStatusProps {
  totalQuestions: number;
  answeredQuestions: number;
  currentStep: number;
  partialScore: number;
}

const QuizGameStatus = ({
  totalQuestions,
  answeredQuestions,
  currentStep,
  partialScore,
}: QuizGameStatusProps) => {
  const steps = Array.from({ length: totalQuestions });

  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            Nível atual
          </p>
          <p className="text-2xl font-bold text-white">
            Fase {currentStep + 1} de {totalQuestions}
          </p>
          <p className="text-sm text-white/70">
            Responda para liberar a próxima etapa.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/15 px-4 py-1 text-sm font-medium text-purple-100">
            <Sparkles className="h-4 w-4" />
            <span>
              Progresso: {answeredQuestions}/{totalQuestions}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-1 text-sm font-medium text-emerald-100">
            <Trophy className="h-4 w-4" />
            <span>Score parcial: {partialScore}%</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {steps.map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUnlocked = index <= answeredQuestions;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition",
                isCurrent &&
                  "border-purple-400 bg-purple-500/20 text-white shadow-lg",
                !isCurrent &&
                  isCompleted &&
                  "border-emerald-400 bg-emerald-500/20 text-emerald-100",
                !isCurrent &&
                  !isCompleted &&
                  isUnlocked &&
                  "border-blue-400 bg-blue-500/15 text-blue-100",
                !isUnlocked && "border-white/10 bg-white/5 text-white/50",
              )}
            >
              {isCurrent ? (
                <Target className="h-4 w-4" />
              ) : isCompleted ? (
                <Check className="h-4 w-4" />
              ) : isUnlocked ? (
                <Sparkles className="h-4 w-4" />
              ) : (
                <Lock className="h-4 w-4" />
              )}
              <span>Fase {index + 1}</span>
              {isCompleted && <Badge className="bg-emerald-600/30 text-emerald-50">OK</Badge>}
              {isCurrent && (
                <Badge className="bg-purple-600/40 text-purple-50">Agora</Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizGameStatus;
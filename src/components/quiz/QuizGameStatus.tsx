import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Lock, Sparkles, Target, Trophy } from "lucide-react";

type QuizPhase = "question" | "registration" | "result";

interface QuizGameStatusProps {
  totalQuestions: number;
  answeredQuestions: number;
  currentStep: number;
  partialScore: number;
  phase: QuizPhase;
}

const phaseHeadlines: Record<QuizPhase, string> = {
  question: "Fase atual",
  registration: "Resultado bloqueado",
  result: "Resultado liberado",
};

const phaseDescriptions: Record<QuizPhase, string> = {
  question: "Responda para liberar a próxima etapa.",
  registration: "Preencha seus dados para desbloquear a recomendação.",
  result: "Confira a análise final logo abaixo.",
};

const phaseScoreLabel: Record<QuizPhase, string> = {
  question: "Score parcial",
  registration: "Score parcial",
  result: "Score final",
};

const QuizGameStatus = ({
  totalQuestions,
  answeredQuestions,
  currentStep,
  partialScore,
  phase,
}: QuizGameStatusProps) => {
  const normalizedStep = Math.min(currentStep, totalQuestions);
  const activeIndex = Math.min(normalizedStep, totalQuestions - 1);
  const steps = Array.from({ length: totalQuestions });
  const allCompleted = phase !== "question";

  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            {phaseHeadlines[phase]}
          </p>
          <p className="text-2xl font-bold text-white">
            {phase === "question"
              ? `Fase ${activeIndex + 1} de ${totalQuestions}`
              : "Prepare-se para o grande momento"}
          </p>
          <p className="text-sm text-white/70">{phaseDescriptions[phase]}</p>
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
            <span>
              {phaseScoreLabel[phase]}: {partialScore}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {steps.map((_, index) => {
          const isCompleted = allCompleted || index < normalizedStep;
          const isCurrent =
            phase === "question" && normalizedStep < totalQuestions && index === normalizedStep;
          const isUnlocked = allCompleted || index <= normalizedStep;

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
              {isCompleted && (
                <Badge className="bg-emerald-600/30 text-emerald-50">OK</Badge>
              )}
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
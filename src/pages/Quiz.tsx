import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase";
import {
  Sparkles,
  ShieldCheck,
  Gauge,
  BarChart3,
  Gamepad2,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Flag,
} from "lucide-react";

const questionConfig = [
  {
    id: "paymentHistory",
    title: "Como está o histórico de pagamentos do cliente?",
    description:
      "Considere pagamentos de empréstimos, cartões e financiamentos nos últimos 12 meses.",
    options: [
      {
        value: "always_on_time",
        label: "Sempre em dia",
        description:
          "Pagamentos realizados até a data de vencimento, sem atrasos.",
        weight: 4,
      },
      {
        value: "few_delays",
        label: "Atrasos pontuais",
        description:
          "Até dois atrasos leves, todos regularizados rapidamente.",
        weight: 3,
      },
      {
        value: "recurrent_delays",
        label: "Atrasos recorrentes",
        description: "Mais de dois atrasos e renegociações recentes.",
        weight: 2,
      },
      {
        value: "serious_default",
        label: "Débitos em aberto",
        description: "Contas em atraso ainda não regularizadas ou negativadas.",
        weight: 1,
      },
    ],
  },
  {
    id: "debtLevel",
    title: "Qual é o nível de endividamento atual?",
    description:
      "Compare o valor total de dívidas com a renda ou faturamento mensal.",
    options: [
      {
        value: "below_30",
        label: "Até 30% da renda/faturamento",
        description: "Comprometimento saudável e controlado.",
        weight: 4,
      },
      {
        value: "between_30_60",
        label: "Entre 30% e 60%",
        description: "Ainda confortável, mas requer atenção.",
        weight: 3,
      },
      {
        value: "between_60_90",
        label: "Entre 60% e 90%",
        description: "Endividamento alto, risco de estresse financeiro.",
        weight: 2,
      },
      {
        value: "above_90",
        label: "Acima de 90%",
        description: "Comprometimento extremo da renda.",
        weight: 1,
      },
    ],
  },
  {
    id: "incomeStability",
    title: "Como você avalia a estabilidade de renda/faturamento?",
    description:
      "Considere a previsibilidade de entradas e continuidade do negócio.",
    options: [
      {
        value: "very_stable",
        label: "Alta estabilidade",
        description:
          "Receitas recorrentes e previsíveis nos últimos 12 meses.",
        weight: 4,
      },
      {
        value: "stable",
        label: "Estável",
        description: "Oscilações leves, sem impacto relevante no fluxo de caixa.",
        weight: 3,
      },
      {
        value: "volatile",
        label: "Volátil",
        description: "Oscilações frequentes e grandes variações mensais.",
        weight: 2,
      },
      {
        value: "unpredictable",
        label: "Imprevisível",
        description:
          "Dependência de contratos pontuais ou sazonalidade extrema.",
        weight: 1,
      },
    ],
  },
  {
    id: "creditUsage",
    title: "Como está o uso atual de limites de crédito?",
    description:
      "Observe a utilização de cartões, linhas e cheque especial.",
    options: [
      {
        value: "below_30_usage",
        label: "Até 30% utilizado",
        description: "Uso saudável com folga para emergências.",
        weight: 4,
      },
      {
        value: "between_30_70_usage",
        label: "Entre 30% e 70%",
        description: "Uso moderado, exige acompanhamento.",
        weight: 3,
      },
      {
        value: "between_70_90_usage",
        label: "Entre 70% e 90%",
        description: "Uso alto, reduz margem de segurança.",
        weight: 2,
      },
      {
        value: "maxed_out",
        label: "Acima de 90% / no limite",
        description:
          "Limites quase esgotados ou recorrência no cheque especial.",
        weight: 1,
      },
    ],
  },
  {
    id: "businessBehavior",
    title: "Existe histórico recente de ocorrências negativas?",
    description:
      "Inclua protestos, ações judiciais, restrições ou apontamentos em birôs.",
    options: [
      {
        value: "no_incidents",
        label: "Nenhum registro negativo",
        description: "Sem apontamentos ou ações nos últimos 24 meses.",
        weight: 4,
      },
      {
        value: "old_incidents",
        label: "Ocorrências antigas",
        description: "Registros com mais de 12 meses, já regularizados.",
        weight: 3,
      },
      {
        value: "recent_incidents",
        label: "Ocorrências recentes",
        description: "Protestos ou ações nos últimos 12 meses.",
        weight: 2,
      },
      {
        value: "active_restrictions",
        label: "Restrições ativas",
        description: "Negativações ou ações em andamento sem solução.",
        weight: 1,
      },
    ],
  },
] as const;

type QuestionId = (typeof questionConfig)[number]["id"];
type QuestionFieldName = `answers.${QuestionId}`;

const classificationConfig = [
  {
    label: "Excelente",
    minScore: 85,
    badgeClass: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    description: "Perfil muito sólido e baixa probabilidade de inadimplência.",
    recommendations: [
      "Mantenha a disciplina de pagamentos e monitore consultas.",
      "Considere aumentar limites com segurança controlada.",
      "Use monitoração automática para preservar o perfil.",
    ],
  },
  {
    label: "Bom",
    minScore: 65,
    badgeClass: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    description: "Risco baixo, com pontos de atenção administráveis.",
    recommendations: [
      "Reforce a reserva para evitar uso excessivo de crédito.",
      "Negocie melhores taxas aproveitando o bom desempenho.",
      "Acompanhe indicadores críticos mensalmente.",
    ],
  },
  {
    label: "Moderado",
    minScore: 45,
    badgeClass: "bg-yellow-500/15 text-yellow-200 border border-yellow-500/30",
    description:
      "Risco intermediário, precisa de ajustes antes de aprovações maiores.",
    recommendations: [
      "Reduza o uso dos limites e renegocie dívidas caras.",
      "Crie plano de regularização para ocorrências recentes.",
      "Monitore novos apontamentos em tempo real.",
    ],
  },
  {
    label: "Crítico",
    minScore: 0,
    badgeClass: "bg-red-500/15 text-red-300 border border-red-500/30",
    description: "Alto risco de inadimplência. Evite concessões sem garantias.",
    recommendations: [
      "Solicite garantias adicionais ou avalista com bom histórico.",
      "Priorize a regularização dos débitos em aberto.",
      "Implemente monitoramento diário até estabilizar o perfil.",
    ],
  },
] as const;

type Classification = (typeof classificationConfig)[number];

const answersShape = questionConfig.reduce<Record<string, z.ZodString>>(
  (shape, question) => {
    shape[question.id] = z.string({
      required_error: "Selecione uma opção.",
    });
    return shape;
  },
  {},
);

const quizSchema = z.object({
  nome: z
    .string()
    .min(3, "Informe ao menos 3 caracteres.")
    .max(120, "Nome muito longo."),
  email: z.string().email("Digite um e-mail válido."),
  whatsapp: z
    .string()
    .min(10, "Informe um WhatsApp válido.")
    .max(11, "Informe um WhatsApp válido."),
  empresa: z
    .string()
    .max(120, "Nome muito longo.")
    .optional()
    .or(z.literal("")),
  answers: z.object(answersShape),
});

type QuizFormValues = z.infer<typeof quizSchema>;

const maxPossibleScore = questionConfig.reduce((total, question) => {
  const highest = Math.max(...question.options.map((option) => option.weight));
  return total + highest;
}, 0);

const sanitizeWhatsapp = (value: string) => value.replace(/\D/g, "").slice(0, 11);

const formatWhatsapp = (value: string) => {
  const digits = sanitizeWhatsapp(value);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const getClassification = (score: number): Classification => {
  for (const classification of classificationConfig) {
    if (score >= classification.minScore) {
      return classification;
    }
  }

  return classificationConfig[classificationConfig.length - 1];
};

const buildDefaultAnswers = () =>
  questionConfig.reduce<Record<QuestionId, string>>((answers, question) => {
    answers[question.id] = "";
    return answers;
  }, {} as Record<QuestionId, string>);

interface QuizAnswerPayload {
  id: string;
  question: string;
  value: string;
  label: string;
  weight: number;
}

interface QuizLeadPayload {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string | null;
  respostas: QuizAnswerPayload[];
  score: number;
  resultado: string;
  utm_source: string | null;
  utm_campaign: string | null;
}

interface ResultSummary {
  score: number;
  classification: Classification;
}

type Step = "welcome" | "result" | number;

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const utmSource = searchParams.get("utm_source");
  const utmCampaign = searchParams.get("utm_campaign");

  const [result, setResult] = useState<ResultSummary | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");

  const defaultValues = useMemo<QuizFormValues>(
    () => ({
      nome: "",
      email: "",
      whatsapp: "",
      empresa: "",
      answers: buildDefaultAnswers(),
    }),
    [],
  );

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues,
    shouldUnregister: false,
    mode: "onChange",
  });

  const createLead = useMutation({
    mutationFn: async (payload: QuizLeadPayload) => {
      const { error } = await supabase.from("quiz_leads").insert({
        nome: payload.nome,
        email: payload.email,
        whatsapp: payload.whatsapp,
        empresa: payload.empresa,
        respostas: payload.respostas,
        score: payload.score,
        resultado: payload.resultado,
        utm_source: payload.utm_source,
        utm_campaign: payload.utm_campaign,
      });

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success(
        "Respostas recebidas! Retornaremos com uma recomendação personalizada.",
      );
    },
    onError: (error: Error) => {
      toast.error(
        error.message || "Não foi possível enviar o quiz. Tente novamente.",
      );
    },
  });

  const onSubmit = async (values: QuizFormValues) => {
    const answers = questionConfig.map((question) => {
      const selectedOption = question.options.find(
        (option) => option.value === values.answers[question.id],
      );

      if (!selectedOption) {
        throw new Error("Selecione uma opção válida para todas as perguntas.");
      }

      return {
        id: question.id,
        question: question.title,
        value: selectedOption.value,
        label: selectedOption.label,
        weight: selectedOption.weight,
      };
    });

    const totalWeight = answers.reduce((total, answer) => total + answer.weight, 0);
    const score = Math.round((totalWeight / maxPossibleScore) * 100);
    const classification = getClassification(score);
    const sanitizedWhatsapp = sanitizeWhatsapp(values.whatsapp);

    await createLead.mutateAsync({
      nome: values.nome.trim(),
      email: values.email.trim().toLowerCase(),
      whatsapp: sanitizedWhatsapp,
      empresa: values.empresa?.trim() ? values.empresa.trim() : null,
      respostas: answers,
      score,
      resultado: classification.label,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
    });

    setResult({
      score,
      classification,
    });

    form.reset({
      ...defaultValues,
      answers: buildDefaultAnswers(),
    });

    setCurrentStep("result");
  };

  const totalQuestions = questionConfig.length;
  const activeQuestion =
    typeof currentStep === "number" ? questionConfig[currentStep] : null;
  const questionFieldName: QuestionFieldName | null = activeQuestion
    ? (`answers.${activeQuestion.id}` as QuestionFieldName)
    : null;
  const currentAnswer = questionFieldName ? form.watch(questionFieldName) : "";
  const progressValue =
    typeof currentStep === "number"
      ? ((currentStep + 1) / totalQuestions) * 100
      : 0;

  const startQuiz = async () => {
    const isValid = await form.trigger(["nome", "email", "whatsapp", "empresa"]);
    if (isValid) {
      setCurrentStep(0);
      setResult(null);
    }
  };

  const goToPreviousStep = () => {
    if (typeof currentStep !== "number") {
      return;
    }

    if (currentStep === 0) {
      setCurrentStep("welcome");
      return;
    }

    setCurrentStep(currentStep - 1);
  };

  const goToNextStep = async () => {
    if (typeof currentStep !== "number" || !activeQuestion || !questionFieldName) {
      return;
    }

    const isValid = await form.trigger(questionFieldName);
    if (!isValid) {
      return;
    }

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    if (!createLead.isPending) {
      await form.handleSubmit(onSubmit)();
    }
  };

  const restartQuiz = () => {
    setResult(null);
    setCurrentStep("welcome");
    form.reset({
      ...defaultValues,
      answers: buildDefaultAnswers(),
    });
  };

  const isFinalQuestion =
    typeof currentStep === "number" && currentStep === totalQuestions - 1;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#080810] via-[#0f0f1a] to-[#07070d] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto max-w-4xl px-4 py-16">
          <Form {...form}>
            {currentStep === "welcome" && (
              <Card className="border-none bg-white/10 backdrop-blur">
                <CardHeader className="space-y-4 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
                    <Gamepad2 className="h-4 w-4" />
                    Quiz Uzy Score · 5 fases
                  </div>
                  <CardTitle className="text-4xl font-bold leading-tight">
                    Prepare-se para o desafio de crédito
                  </CardTitle>
                  <CardDescription className="text-base text-white/70">
                    Preencha seus dados para registrar o resultado e desbloquear as perguntas.
                    Responda como se estivesse analisando um cadastro real.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-white/80">
                            Nome completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Nome do solicitante"
                              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-purple-400 focus:ring-purple-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-white/80">E-mail</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="contato@empresa.com"
                              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-purple-400 focus:ring-purple-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-white/80">WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              value={formatWhatsapp(field.value)}
                              onChange={(event) =>
                                field.onChange(sanitizeWhatsapp(event.target.value))
                              }
                              onBlur={field.onBlur}
                              placeholder="(11) 90000-0000"
                              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-purple-400 focus:ring-purple-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-white/80">
                            Empresa (opcional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Razão social ou nome fantasia"
                              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-purple-400 focus:ring-purple-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-purple-300" />
                      5 perguntas rápidas
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-purple-300" />
                      Dados protegidos e enviados ao Supabase
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-purple-300" />
                      Resultado calculado na hora
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col items-center gap-4 border-t border-white/10 bg-white/5 p-6 md:flex-row md:justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <BarChart3 className="h-4 w-4 text-purple-300" />
                    Você verá uma recomendação baseada em IA ao final.
                  </div>
                  <Button
                    onClick={startQuiz}
                    className="h-12 min-w-[200px] bg-purple-600 text-base font-semibold text-white transition hover:bg-purple-700"
                  >
                    Começar o jogo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {typeof currentStep === "number" &&
              activeQuestion &&
              questionFieldName && (
                <Card className="mt-10 border-none bg-white/10 backdrop-blur">
                  <CardHeader className="space-y-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <Badge className="w-fit bg-purple-500/20 text-purple-200">
                        Pergunta {currentStep + 1} de {totalQuestions}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Sparkles className="h-4 w-4 text-purple-300" />
                        Desbloqueie todas para revelar o resultado
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Progress value={progressValue} className="h-2 bg-white/10" />
                      <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold leading-tight text-white">
                          {activeQuestion.title}
                        </h2>
                        <p className="text-sm text-white/70">
                          {activeQuestion.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name={questionFieldName}
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="grid gap-4 md:grid-cols-2"
                            >
                              {activeQuestion.options.map((option) => {
                                const isSelected = field.value === option.value;
                                return (
                                  <label
                                    key={option.value}
                                    htmlFor={`${activeQuestion.id}-${option.value}`}
                                    className={cn(
                                      "flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-400/50 hover:bg-purple-500/10",
                                      isSelected &&
                                        "border-purple-400 bg-purple-500/15 shadow-lg",
                                    )}
                                  >
                                    <RadioGroupItem
                                      value={option.value}
                                      id={`${activeQuestion.id}-${option.value}`}
                                      className="mt-1 border-white/40 text-purple-500 focus-visible:ring-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
                                    />
                                    <div className="space-y-2">
                                      <p className="text-lg font-semibold text-white">
                                        {option.label}
                                      </p>
                                      <p className="text-sm text-white/60">
                                        {option.description}
                                      </p>
                                    </div>
                                  </label>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>

                  <CardFooter className="flex flex-col gap-4 border-t border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <ShieldCheck className="h-4 w-4 text-purple-300" />
                      Suas respostas ficam salvas para calcular o resultado final.
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                      <Button
                        variant="outline"
                        onClick={goToPreviousStep}
                        className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 md:w-auto"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Voltar
                      </Button>
                      <Button
                        onClick={goToNextStep}
                        disabled={!currentAnswer || createLead.isPending}
                        className="w-full bg-purple-600 text-white hover:bg-purple-700 md:w-auto"
                      >
                        {createLead.isPending ? (
                          "Calculando..."
                        ) : isFinalQuestion ? (
                          <>
                            Revelar resultado
                            <Flag className="ml-2 h-5 w-5" />
                          </>
                        ) : (
                          <>
                            Próxima pergunta
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              )}
          </Form>

          {currentStep === "result" && result && (
            <Card className="mt-12 border-none bg-white/10 backdrop-blur">
              <CardHeader className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-5 py-2 text-sm font-semibold text-emerald-200">
                  <Trophy className="h-4 w-4" />
                  Resultado desbloqueado
                </div>
                <CardTitle className="text-3xl font-bold text-white">
                  Recomendação do motor de crédito
                </CardTitle>
                <CardDescription className="text-white/70">
                  Resultado calculado com base nas suas respostas e ponderado pelo nosso motor.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:gap-10 md:p-8">
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-white/60">Pontuação estimada</span>
                    <span className="text-5xl font-extrabold text-white">
                      {result.score}
                    </span>
                  </div>
                  <Badge
                    className={cn(
                      "rounded-full px-4 py-1 text-base font-semibold uppercase tracking-wide",
                      result.classification.badgeClass,
                    )}
                  >
                    {result.classification.label}
                  </Badge>
                  <p className="text-sm leading-relaxed text-white/80">
                    {result.classification.description}
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    Próximos passos sugeridos
                  </p>
                  <ul className="space-y-3 text-sm text-white/70">
                    {result.classification.recommendations.map((recommendation) => (
                      <li key={recommendation} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 border-t border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <BarChart3 className="h-4 w-4 text-purple-300" />
                  Resultado enviado ao Supabase e disponível para análises futuras.
                </div>
                <Button
                  variant="outline"
                  onClick={restartQuiz}
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Jogar novamente
                </Button>
              </CardFooter>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default Quiz;
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
import QuizGameStatus from "@/components/quiz/QuizGameStatus";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase";
import {
  Sparkles,
  ShieldCheck,
  Gauge,
  BarChart3,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Flag,
  Lock,
  Sparkle,
  MessageCircle,
} from "lucide-react";

const CTA_URL = "https://w.app/promolp";

const questionConfig = [
  {
    id: "creditProcess",
    title: "Você faz análise de crédito antes de conceder prazo?",
    description:
      "Entenda se já existe um processo estruturado para avaliar clientes antes de liberar vendas a prazo.",
    options: [
      {
        value: "always_automated",
        label: "Sempre (ferramenta automatizada)",
        description: "Processo automático com ferramenta dedicada.",
        weight: 3,
      },
      {
        value: "always_manual",
        label: "Sempre (manual / procedimento interno)",
        description: "Processo interno documentado, mas feito manualmente.",
        weight: 2,
      },
      {
        value: "sometimes",
        label: "Às vezes / depende do cliente",
        description: "Não há critério padrão, depende do relacionamento.",
        weight: 1,
      },
      {
        value: "never",
        label: "Nunca",
        description: "Concede prazo sem análise prévia.",
        weight: 0,
      },
    ],
  },
  {
    id: "portfolioSize",
    title: "Quantos clientes com vendas a prazo você tem hoje?",
    description:
      "Quanto maior a carteira de clientes a prazo, maior a necessidade de processos estruturados.",
    options: [
      {
        value: "up_to_20",
        label: "Até 20",
        description: "Carteira pequena de clientes a prazo.",
        weight: 1,
      },
      {
        value: "between_20_100",
        label: "20–100",
        description: "Carteira média; exige algum controle.",
        weight: 2,
      },
      {
        value: "more_than_100",
        label: "Mais de 100",
        description: "Carteira grande; necessidade de processos estruturados.",
        weight: 3,
      },
    ],
  },
  {
    id: "defaultRate",
    title: "Qual porcentagem, em média, atrasa ou não paga?",
    description:
      "Percentual médio de inadimplência considerando atrasos e perdas.",
    options: [
      {
        value: "zero_two",
        label: "0–2%",
        description: "Inadimplência residual.",
        weight: 3,
      },
      {
        value: "three_ten",
        label: "3–10%",
        description: "Controle razoável, mas com perdas pontuais.",
        weight: 2,
      },
      {
        value: "eleven_twentyfive",
        label: "11–25%",
        description: "Inadimplência relevante e crescente.",
        weight: 1,
      },
      {
        value: "over_twentyfive",
        label: "Acima de 25%",
        description: "Alto comprometimento do fluxo de caixa.",
        weight: 0,
      },
    ],
  },
  {
    id: "creditControl",
    title: "Como você avalia seu controle atual de crédito?",
    description:
      "Qual o nível de estrutura e automação do processo que sustenta as decisões de crédito.",
    options: [
      {
        value: "fully_automated",
        label: "Muito bom / totalmente automatizado",
        description: "Fluxo digital, regras claras e auditoria.",
        weight: 3,
      },
      {
        value: "partially_automated",
        label: "Bom / parcialmente automatizado",
        description: "Processo consistente com alguns recursos digitais.",
        weight: 2,
      },
      {
        value: "manual",
        label: "Fraco / manual",
        description: "Planilhas e controles pouco confiáveis.",
        weight: 1,
      },
      {
        value: "none",
        label: "Não existe controle",
        description: "Concede crédito sem qualquer política.",
        weight: 0,
      },
    ],
  },
  {
    id: "creditTools",
    title: "Você já usa alguma plataforma de consulta de crédito?",
    description:
      "Determine o grau de maturidade no uso de ferramentas externas para apoio na decisão.",
    options: [
      {
        value: "use_frequently",
        label: "Sim — uso com frequência",
        description: "Consultas recorrentes antes de liberar crédito.",
        weight: 3,
      },
      {
        value: "used_rarely",
        label: "Já usei, mas parei / uso raramente",
        description: "Consome consultas só em casos pontuais.",
        weight: 1,
      },
      {
        value: "never_used",
        label: "Não, nunca usei",
        description: "Depende apenas de percepção/perfilamento manual.",
        weight: 0,
      },
    ],
  },
  {
    id: "ticketSize",
    title: "Qual o ticket médio das suas vendas a prazo?",
    description:
      "Quanto maior o ticket, maior a exposição a perdas por cliente inadimplente.",
    options: [
      {
        value: "above_5000",
        label: "Acima de R$5.000",
        description: "Operações de alto valor; exposição elevada.",
        weight: 3,
      },
      {
        value: "between_500_5000",
        label: "R$500–R$5.000",
        description: "Operações medianas; risco moderado por cliente.",
        weight: 2,
      },
      {
        value: "up_to_500",
        label: "Até R$500",
        description: "Tickets pequenos; menor exposição por cliente.",
        weight: 1,
      },
    ],
  },
  {
    id: "openToCall",
    title:
      "Você quer receber um diagnóstico gratuito e uma consulta de demonstração?",
    description:
      "Vamos entender se deseja que nossa equipe comercial entre em contato.",
    options: [
      {
        value: "yes",
        label: "Sim, quero a consulta gratuita",
        description: "Deseja falar com o time comercial.",
        weight: 1,
      },
      {
        value: "no",
        label: "Não agora",
        description: "Prefere seguir sem contato.",
        weight: 0,
      },
    ],
  },
] as const;

type QuestionId = (typeof questionConfig)[number]["id"];
type QuestionFieldName = `answers.${QuestionId}`;

const classificationConfig = [
  {
    label: "Baixo Risco",
    minScore: 71,
    badgeClass: "bg-emerald-500/15 text-emerald-200 border-emerald-500/30",
    description:
      "✅ Seu controle de crédito parece eficiente. A Uzy Score pode otimizar e escalar esse processo — ganhe 1 consulta extra para revisar sua política de crédito.",
    ctaLabel: "Receber recomendações para otimização",
    recommendations: [
      "Automatize auditorias e distribua regras em toda a equipe.",
      "Compare seus resultados com benchmarks do setor para buscar eficiência.",
      "Use consultas estratégicas para validar alterações nas políticas atuais.",
    ],
  },
  {
    label: "Médio Risco",
    minScore: 36,
    badgeClass: "bg-amber-500/15 text-amber-200 border-amber-500/30",
    description:
      "🔶 Você tem algum controle, mas há lacunas que aumentam o risco. A Uzy Score pode ajudar a automatizar e reduzir a inadimplência — agende uma demonstração gratuita.",
    ctaLabel: "Agendar demonstração gratuita",
    recommendations: [
      "Mapeie onde estão os gargalos de análise manual e automatize essas etapas.",
      "Implemente regras mínimas de crédito para a carteira de maior valor.",
      "Ative alertas inteligentes para reagir a inadimplência antes de virar perda.",
    ],
  },
  {
    label: "Alto Risco",
    minScore: 0,
    badgeClass: "bg-red-500/15 text-red-200 border-red-500/30",
    description:
      "⚠️ Seu nível de exposição à inadimplência é ALTO. Recomendamos interromper vendas a prazo para clientes sem análise e agendar uma consulta gratuita com a Uzy Score agora.",
    ctaLabel: "Marcar consulta urgente (grátis)",
    recommendations: [
      "Estruture imediatamente uma política mínima de crédito para novos clientes.",
      "Revise a carteira atual e renegocie operações críticas.",
      "Implemente monitoramento diário com consultas oficiais antes de liberar prazo.",
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

type Step = number | "registration" | "result";

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const utmSource = searchParams.get("utm_source");
  const utmCampaign = searchParams.get("utm_campaign");

  const [result, setResult] = useState<ResultSummary | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>(0);

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

  const answers = (form.watch("answers") ?? {}) as QuizFormValues["answers"];

  const answeredQuestions = questionConfig.reduce((count, question) => {
    return answers[question.id as QuestionId] ? count + 1 : count;
  }, 0);

  const partialWeight = questionConfig.reduce((total, question) => {
    const answerValue = answers[question.id as QuestionId];
    if (!answerValue) {
      return total;
    }
    const option = question.options.find((item) => item.value === answerValue);
    return option ? total + option.weight : total;
  }, 0);

  const partialScore =
    answeredQuestions > 0 ? Math.round((partialWeight / maxPossibleScore) * 100) : 0;

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
      toast.success("Respostas recebidas! Resultado liberado logo abaixo.");
    },
    onError: (error: Error) => {
      toast.error(
        error.message || "Não foi possível enviar o quiz. Tente novamente.",
      );
    },
  });

  const onSubmit = (values: QuizFormValues) => {
    const answersList = questionConfig.map((question) => {
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

    const totalWeight = answersList.reduce((total, answer) => total + answer.weight, 0);
    const scorePercent = Math.round((totalWeight / maxPossibleScore) * 100);
    const classification = getClassification(scorePercent);
    const sanitizedWhatsapp = sanitizeWhatsapp(values.whatsapp);

    const payload: QuizLeadPayload = {
      nome: values.nome.trim(),
      email: values.email.trim().toLowerCase(),
      whatsapp: sanitizedWhatsapp,
      empresa: values.empresa?.trim() ? values.empresa.trim() : null,
      respostas: answersList,
      score: scorePercent,
      resultado: classification.label,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
    };

    setResult({
      score: scorePercent,
      classification,
    });

    setCurrentStep("result");
    createLead.mutate(payload);
  };

  const totalQuestions = questionConfig.length;
  const phase: "question" | "registration" | "result" =
    typeof currentStep === "number" ? "question" : currentStep;
  const statusStep = typeof currentStep === "number" ? currentStep : totalQuestions;
  const statusScore =
    phase === "result" && result ? result.score : partialScore;

  const activeQuestion =
    typeof currentStep === "number" ? questionConfig[currentStep] : null;
  const questionFieldName: QuestionFieldName | null = activeQuestion
    ? (`answers.${activeQuestion.id}` as QuestionFieldName)
    : null;
  const currentAnswer = questionFieldName ? form.watch(questionFieldName) : "";
  const progressValue =
    typeof currentStep === "number"
      ? ((currentStep + 1) / totalQuestions) * 100
      : 100;

  const goToPreviousStep = () => {
    if (currentStep === "registration") {
      setCurrentStep(totalQuestions - 1);
      return;
    }

    if (typeof currentStep !== "number") {
      return;
    }

    if (currentStep === 0) {
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

    setCurrentStep("registration");
  };

  const handleUnlockResult = async () => {
    const isValid = await form.trigger(["nome", "email", "whatsapp", "empresa"]);
    if (!isValid) {
      return;
    }

    form.handleSubmit(onSubmit)();
  };

  const restartQuiz = () => {
    setResult(null);
    setCurrentStep(0);
    form.reset({
      ...defaultValues,
      answers: buildDefaultAnswers(),
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#080810] via-[#0f0f1a] to-[#07070d] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto max-w-4xl px-4 py-16 space-y-10">
          <QuizGameStatus
            totalQuestions={totalQuestions}
            answeredQuestions={answeredQuestions}
            currentStep={statusStep}
            partialScore={statusScore}
            phase={phase}
          />

          {phase !== "result" && (
            <Form {...form}>
              {phase === "question" && activeQuestion && questionFieldName && (
                <Card className="border-none bg-white/10 backdrop-blur">
                  <CardHeader className="space-y-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <Badge className="w-fit bg-purple-500/20 text-purple-200">
                        Pergunta {statusStep + 1} de {totalQuestions}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Sparkles className="h-4 w-4 text-purple-300" />
                        Desbloqueie todas para ver o resultado final
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
                      Respostas salvas automaticamente.
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
                        disabled={!currentAnswer}
                        className="w-full bg-purple-600 text-white hover:bg-purple-700 md:w-auto"
                      >
                        {statusStep === totalQuestions - 1 ? (
                          <>
                            Ir para cadastro
                            <Flag className="ml-2 h-5 w-5" />
                          </>
                        ) : (
                          <>
                            Próxima fase
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              )}

              {phase === "registration" && (
                <Card className="border-none bg-white/10 backdrop-blur">
                  <CardHeader className="space-y-5 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
                      <Lock className="h-4 w-4" />
                      Resultado trancado — desbloqueie agora
                    </div>
                    <CardTitle className="text-3xl font-bold leading-tight">
                      Só falta você registrar o resultado
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Complete os dados abaixo para receber a recomendação final e salvarmos
                      sua análise.
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
                            <FormLabel className="text-sm text-white/80">
                              E-mail
                            </FormLabel>
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
                            <FormLabel className="text-sm text-white/80">
                              WhatsApp
                            </FormLabel>
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
                        <Sparkle className="h-4 w-4 text-purple-300" />
                        7 perguntas concluídas
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-purple-300" />
                        Dados protegidos e enviados ao Supabase
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-purple-300" />
                        Recomendação personalizada na hora
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 border-t border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <BarChart3 className="h-4 w-4 text-purple-300" />
                      A análise ficará disponível para sua equipe.
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                      <Button
                        variant="outline"
                        onClick={goToPreviousStep}
                        disabled={createLead.isPending}
                        className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 md:w-auto"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Voltar às perguntas
                      </Button>
                      <Button
                        onClick={handleUnlockResult}
                        disabled={createLead.isPending}
                        className="w-full bg-purple-600 text-white hover:bg-purple-700 md:w-auto"
                      >
                        {createLead.isPending ? "Desbloqueando..." : "Desbloquear resultado"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              )}
            </Form>
          )}

          {phase === "result" && result && (
            <Card className="border-none bg-white/10 backdrop-blur">
              <CardHeader className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-5 py-2 text-sm font-semibold text-emerald-200">
                  <Trophy className="h-4 w-4" />
                  Resultado desbloqueado
                </div>
                <CardTitle className="text-3xl font-bold text-white">
                  Nível de Risco e Recomendação
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
                      {result.score}%
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

              <CardFooter className="flex flex-col gap-4 border-t border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <BarChart3 className="h-4 w-4 text-purple-300" />
                  Resultado salvo no Supabase para consultas futuras.
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                  <Button
                    className="flex items-center justify-center gap-2 bg-purple-600 text-white hover:bg-purple-700"
                    asChild
                  >
                    <a href={CTA_URL} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      {result.classification.ctaLabel}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={restartQuiz}
                    className="border-white/20 bg-transparent text-white hover:bg-white/10"
                  >
                    Jogar novamente
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default Quiz;
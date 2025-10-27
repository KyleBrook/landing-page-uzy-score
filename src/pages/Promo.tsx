import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Gift,
  Gauge,
  HelpCircle,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const couponCode = "UZY30OFF";

const heroPerks = [
  "Desconto garantido nas 3 primeiras consultas liberadas",
  "Ativação imediata do motor de crédito com IA",
  "Suporte dedicado para configurar regras e alertas",
];

const highlights = [
  {
    title: "Economia que faz diferença",
    description:
      "Ganhe 30% de desconto para testar a plataforma com volume real sem comprometer seu budget de crédito.",
    icon: Gift,
  },
  {
    title: "Segurança desde o dia 1",
    description:
      "Monitoramento contínuo e alertas inteligentes ajudam a evitar fraudes e inadimplência logo na entrada.",
    icon: Shield,
  },
  {
    title: "Agilidade operacional",
    description:
      "Configure fluxos claros e libere decisões em minutos, com IA priorizando o que realmente importa.",
    icon: Gauge,
  },
];

const testimonials = [
  {
    quote:
      "Em menos de um mês reduzimos 26% das perdas. O motor prioriza os riscos reais e agilizou nosso time.",
    name: "Mariana Santos",
    role: "Analista de Crédito • Grupo Luma",
  },
  {
    quote:
      "Usar o cupom foi a chance ideal para validar a ferramenta. Hoje toda a esteira de crédito roda no Uzy Score.",
    name: "Carlos Ritter",
    role: "Head de Crédito • Fintech Delta",
  },
  {
    quote:
      "A equipe nos ajudou a parametrizar tudo rápido. O desconto facilitou o start sem burocracia interna.",
    name: "Patrícia Lima",
    role: "Gerente de Risco • Banco Solaris",
  },
];

const faqs = [
  {
    question: "Como ativar o cupom UZY30OFF?",
    answer:
      "Acesse uzyscore.com/promo, clique em “Usar cupom agora” e finalize seu cadastro informando o código. O desconto entra automaticamente na primeira fatura.",
  },
  {
    question: "O cupom vale para qual plano?",
    answer:
      "O benefício é aplicado nas consultas avulsas ou no plano Starter. São 30% off válidos para as primeiras 3 consultas liberadas após o cadastro.",
  },
  {
    question: "Preciso cadastrar cartão de crédito?",
    answer:
      "Sim, o cartão é necessário para processarmos a cobrança com desconto. Você pode cancelar quando quiser, sem multa ou fidelidade.",
  },
  {
    question: "Consigo compartilhar o cupom com o meu time?",
    answer:
      "Claro! Cada conta cadastrada pode usar o cupom uma vez. Se precisar de mais unidades, fale com nosso time comercial para liberar condições especiais.",
  },
];

const Promo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#141422] to-[#08080f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-56 w-56 rounded-full bg-purple-400/15 blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge className="flex w-fit items-center gap-2 bg-purple-500/20 text-purple-100">
                <Sparkles className="h-4 w-4" />
                Cupom exclusivo de lançamento
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Lance seu motor de crédito com{" "}
                  <span className="text-purple-300">30% de desconto</span>
                </h1>
                <p className="text-lg text-white/70">
                  Use o cupom <strong>{couponCode}</strong> para testar o Uzy Score
                  com dados reais e priorização por IA. Menos risco, mais decisões
                  confiantes — e um começo acessível para a sua operação.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 gap-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                  onClick={() => {
                    window.location.href = "/quiz";
                  }}
                >
                  Usar cupom agora
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
                  onClick={() => {
                    window.location.href = "/quiz?utm_source=promo&utm_campaign=cupom";
                  }}
                >
                  Ver demo guiada
                </Button>
              </div>

              <div className="grid gap-3">
                {heroPerks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3 text-sm text-white/80">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                      <Check className="h-4 w-4 text-purple-200" />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur shadow-xl border-white/10">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-emerald-500/20 text-emerald-100">
                  Cupom: {couponCode}
                </Badge>
                <CardTitle className="text-3xl font-bold text-white tracking-[0.2em]">
                  {couponCode}
                </CardTitle>
                <CardDescription className="text-base text-white/70">
                  Ative o cupom até <strong>31 de março</strong> e comece com desconto
                  garantido nas suas primeiras análises.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-white/70">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/50">
                    válido para
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Planos Starter e consultas avulsas
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-bold text-white">30%</p>
                    <p className="text-sm text-white/60">
                      de desconto nas 3 primeiras consultas liberadas
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-bold text-white">72h</p>
                    <p className="text-sm text-white/60">
                      para ativar suporte premium de parametrização
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Users className="h-6 w-6 text-purple-200" />
                  <div>
                    <p className="font-semibold text-white">
                      Compartilhe com até 5 usuários do seu time
                    </p>
                    <p className="text-sm text-white/60">
                      Desconto aplicado na conta principal sem custo extra
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <Badge className="mx-auto bg-white/10 text-white">Por que usar agora?</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Aproveite o lançamento para acelerar sua operação
            </h2>
            <p className="mt-3 text-white/70">
              O desconto é só o começo: você ganha velocidade, precisão e segurança para decidir mais.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-100">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <Badge className="mx-auto bg-purple-500/20 text-purple-100">
              Histórias reais
            </Badge>
            <h2 className="mt-4 text-3xl font-bold">Quem já reduziu perdas com o Uzy Score</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-white/10 bg-white/5 backdrop-blur transition hover:border-purple-400/40"
              >
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16">
          <div className="mb-10 text-center">
            <Badge className="mx-auto bg-white/10 text-white">FAQ do cupom</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Dúvidas rápidas antes de ativar
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-white/10 bg-white/5 backdrop-blur">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                    <HelpCircle className="h-5 w-5 text-purple-100" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-white/70">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 pb-20">
          <Card className="border-white/10 bg-gradient-to-r from-purple-600/80 via-purple-500/80 to-purple-400/80 text-white shadow-2xl">
            <CardContent className="flex flex-col gap-6 p-10 text-center md:text-left">
              <div className="space-y-3">
                <Badge className="mx-auto bg-white/20 text-white md:mx-0">
                  Últimos dias do cupom
                </Badge>
                <h2 className="text-3xl font-bold">
                  Ative o {couponCode} e veja como é decidir crédito com dados profundos
                </h2>
                <p className="text-white/80">
                  Você ganha desconto, suporte premium e um motor que reduz prejuízos. Seu time ganha velocidade, previsibilidade e confiança.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  size="lg"
                  className="h-14 gap-2 rounded-xl bg-white text-purple-700 hover:bg-white/90"
                  onClick={() => {
                    window.location.href = "/quiz?utm_source=promo&utm_campaign=landing";
                  }}
                >
                  Garantir meu cupom
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Voltar ao topo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Promo;
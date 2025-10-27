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
  AlertTriangle,
  Check,
  Gift,
  Lightbulb,
  MessageCircle,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";

const whatsappPrefill = encodeURIComponent(
  "Olá! Quero testar o Uzy Score e começar com as 2 consultas grátis.",
);

const Promo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#141422] to-[#08080f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-12 right-1/4 h-60 w-60 rounded-full bg-purple-400/15 blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto max-w-5xl px-4 py-16 lg:py-24 space-y-10 text-center">
          <Badge className="mx-auto flex w-fit items-center gap-2 bg-purple-500/20 text-purple-100">
            <Sparkles className="h-4 w-4" />
            Consulta oficial com Inteligência Artificial
          </Badge>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Inibimos Inadimplentes
              <span className="block text-purple-300">
                A Consulta Mais Completa do Brasil
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-white/70">
              Serasa + SCR Bacen + Perfil Socioeconômico + Análise preditiva com Inteligência Artificial.
            </p>
            <p className="mx-auto max-w-3xl text-lg text-white/70">
              Garantimos melhor preço do Brasil em consultas.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-base text-white/70">
                Se ficou com dúvidas, liberamos 2 consultas grátis para novos membros.
              </p>
              <Button
                asChild
                className="h-12 rounded-xl bg-purple-600 px-6 text-white hover:bg-purple-700"
              >
                <a href="https://uzyscore.com.br/auth/register">
                  Cadastrar na plataforma
                </a>
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-base text-white/70">
                Quer ganhar 30 consultas grátis?
              </p>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-purple-400/40 bg-transparent px-6 text-white hover:bg-white/10"
              >
                <a href="https://w.app/uzyscore" target="_blank" rel="noreferrer">
                  Eu Quero
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-16 space-y-10">
          <Card className="border-white/10 bg-white/5">
            <CardHeader className="space-y-4 text-center md:text-left">
              <Badge className="w-fit bg-red-500/20 text-red-100">
                😩 Dor real
              </Badge>
              <CardTitle className="text-2xl font-semibold text-white">
                Você ainda fecha contratos sem saber quem está do outro lado?
              </CardTitle>
              <CardDescription className="text-base text-white/70">
                Muitos empreendedores perdem dinheiro todos os meses por não analisar o perfil de crédito
                completo antes de vender. O resultado? Recebíveis atrasados, prejuízo e tempo perdido.
                Vender no escuro virou rotina — até agora.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-white/10 bg-white/5">
            <CardHeader className="space-y-4 text-center md:text-left">
              <Badge className="w-fit bg-emerald-500/20 text-emerald-100">
                ⚙️ Como resolvemos
              </Badge>
              <CardTitle className="text-2xl font-semibold text-white">
                Consulte o perfil de crédito mais completo do Brasil
              </CardTitle>
              <CardDescription className="text-base text-white/70">
                Com o Uzy Score, você recebe dados oficiais do Bacen e um perfil socioeconômico detalhado.
                Entenda o risco real antes de aprovar um cliente e acabe com a inadimplência.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16 space-y-8">
          <h2 className="text-center text-3xl font-bold">Por que o Uzy Score é indispensável?</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Relatório oficial do BACEN (dados reais e atualizados)",
              "Perfil socioeconômico completo e comportamento de pagamento",
              "Informações de protestos, ações e cheques sem fundo",
              "Score de crédito real, limite presumido e faturamento estimado",
              "Interface simples, consulta em segundos, e sem planos forçados",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                  <Check className="h-5 w-5 text-purple-200" />
                </span>
                <p className="text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-16 space-y-6">
          <h2 className="text-center text-3xl font-bold">Diferenciais que só o Uzy Score entrega</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-purple-200" />
                <p className="text-lg font-semibold text-white">🚫 Não te prendemos em planos caríssimos</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <Shield className="h-8 w-8 text-purple-200" />
                <p className="text-lg font-semibold text-white">
                  📊 Relatório completo com dados do Bacen + perfil socioeconômico real
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <Lightbulb className="h-8 w-8 text-purple-200" />
                <p className="text-lg font-semibold text-white">
                  ⚡ A consulta mais rápida, completa e barata do Brasil
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-16">
          <Card className="border-emerald-400/30 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-purple-400/20">
            <CardHeader className="space-y-4 text-center">
              <Badge className="mx-auto bg-red-500/30 text-red-100">
                🎁 Oferta especial
              </Badge>
              <CardTitle className="text-3xl font-bold text-white">
                🔥 Promoção da Semana
              </CardTitle>
              <CardDescription className="text-lg text-white/80">
                Cadastre-se agora e ganhe 2 consultas gratuitas para testar a plataforma.
                E se você quiser um plano maior, ganhe 30 consultas grátis de boas-vindas!
                <span className="block font-semibold text-white mt-3">Não perca — é por tempo limitado.</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="container mx-auto max-w-3xl px-4 py-12 text-center">
          <p className="text-base text-white/70">
            Sem contratos longos. Sem letras miúdas.
            <span className="block font-semibold text-white mt-2">
              Use quando quiser, pague só o que usar.
            </span>
          </p>
        </section>

        <section
          id="how-it-works"
          className="container mx-auto max-w-4xl px-4 py-16 space-y-8"
        >
          <h2 className="text-center text-3xl font-bold">Como funciona</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1️⃣",
                title: "Cadastre-se gratuitamente",
                text: "Leva minutos e já desbloqueia as 2 consultas iniciais.",
              },
              {
                step: "2️⃣",
                title: "Rode sua primeira consulta",
                text: "Selecione o cliente, confirme os dados e acione a consulta.",
              },
              {
                step: "3️⃣",
                title: "Receba o relatório completo",
                text: "Bacen + perfil socioeconômico entregues em segundos.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-white/10 bg-white/5">
                <CardContent className="space-y-3 p-6 text-center">
                  <span className="text-2xl">{item.step}</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/70">
            Simples, rápido e direto ao ponto.
          </p>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-16 space-y-6">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-6 p-8 text-center">
              <h2 className="text-3xl font-bold">Comece agora mesmo</h2>
              <p className="text-white/70">
                Escolha a forma mais conveniente para falar com a gente e testar o Uzy Score hoje.
              </p>

              <div className="grid gap-4 md:grid-cols-3 text-left">
                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Button
                    asChild
                    className="h-12 gap-2 rounded-xl bg-emerald-500 text-emerald-950 hover:bg-emerald-400"
                  >
                    <a href={`https://wa.me/?text=${whatsappPrefill}`} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <p className="text-xs text-white/70">
                    Atendimento imediato para liberar as 2 consultas grátis.
                  </p>
                </div>

                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Button
                    asChild
                    className="h-12 gap-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <a href="/quiz?utm_source=promo&utm_medium=cta_final">
                      <Gift className="h-5 w-5" />
                      Ganhar 2 consultas grátis
                    </a>
                  </Button>
                  <p className="text-xs text-white/70">
                    Acesso imediato ao painel e às suas consultas.
                  </p>
                </div>

                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-purple-400/40 bg-transparent text-white hover:bg-white/10"
                  >
                    <a href="/quiz?plan=pro&utm_source=promo&utm_medium=cta_final">
                      <Rocket className="h-5 w-5" />
                      Plano PRO com 30 grátis
                    </a>
                  </Button>
                  <p className="text-xs text-white/70">
                    Ideal para operações que precisam de volume desde o início.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="container mx-auto max-w-4xl px-4 py-12 text-center text-sm text-white/60">
          <div className="space-y-2">
            <p>Relatórios integrados a bases públicas e privadas, com dados oficiais.</p>
            <p>Uso autorizado exclusivamente para análise de crédito.</p>
            <p>© Uzy Score – uzy.com.br</p>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          className="h-12 rounded-full bg-emerald-500 px-5 text-emerald-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
        >
          <a href="https://w.app/8gge13" target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Promo;
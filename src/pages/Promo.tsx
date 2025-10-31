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
            <div className="space-y-4">
              <p className="text-base text-white/70">
                Faça 2 consultas gratuitas para conhecer a plataforma.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-emerald-500/15 text-emerald-100 border border-emerald-500/40 px-4 py-2 text-sm font-semibold">
                  Use o cupom: <span className="ml-1 text-emerald-200">UZY2</span>
                </Badge>
              </div>
              <Button
                asChild
                className="h-12 rounded-xl bg-purple-600 px-6 text-white hover:bg-purple-700"
              >
                <a href="https://uzyscore.com.br/auth/register">
                  Conhecer relatório Uzy
                </a>
              </Button>
            </div>

            <Card className="border-none bg-gradient-to-r from-purple-600/40 via-purple-500/30 to-emerald-500/20 shadow-lg">
              <CardContent className="flex flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white/20 p-3">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      Bônus exclusivo de novembro
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      Assine um plano Enterprise e ganhe +30 consultas extras
                    </h3>
                    <p className="text-sm text-white/80">
                      Oferta válida durante novembro para turbinar sua operação de crédito.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <a href="https://w.app/promolp" target="_blank" rel="noreferrer">
                    Falar com vendas
                  </a>
                </Button>
              </CardContent>
            </Card>
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
          <h2 className="text-center text-3xl font-bold">Porque a Uzy é diferente?</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Relatório oficial do BACEN (dados reais e atualizados)",
              "Perfil socioeconômico completo e comportamento de pagamento",
              "Informações de protestos, ações e cheques sem fundo",
              "Score de crédito real, limite presumido e faturamento estimado",
              "Interface simples, consulta em segundos, e sem planos forçados",
              "O menor valor do Brasil, justo pra não ser custo pesado na sua operação",
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

        <section className="container mx-auto max-w-4xl px-4 py-16 space-y-10">
          <Card className="relative overflow-hidden border border-purple-500/40 bg-neutral-900/95">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.45),_rgba(76,201,240,0.12),transparent)] opacity-90" />
            <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-purple-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-28 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
            <CardHeader className="relative space-y-4 text-center">
              <Badge className="mx-auto bg-red-500/30 text-red-100">
                🎁 Oferta especial
              </Badge>
              <CardTitle className="text-3xl font-bold text-white">
                🔥 Promoção da Semana
              </CardTitle>
              <CardDescription className="text-lg text-white/75">
                Cadastre-se agora e ganhe 2 consultas gratuitas para testar a plataforma.
                E se você quiser um plano maior, ganhe 30 consultas grátis de boas-vindas!
                <span className="mt-3 block font-semibold text-white">Não perca — é por tempo limitado.</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="container mx-auto max-w-3xl px-4 py-12 text-center">
          <div className="space-y-4 text-white/70">
            <p className="text-lg">
              Estamos no WhatsApp para condições especiais ou tirar dúvidas sobre a plataforma.
            </p>
            <p className="font-semibold text-white">
              Clique no botão abaixo e fale com nosso time agora mesmo.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="https://w.app/8gge13" target="_blank" rel="noreferrer">
                Falar com o time no WhatsApp
              </a>
            </Button>
          </div>
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
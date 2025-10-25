import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  SearchCheck,
  Gauge,
  Users,
  AlertTriangle,
  DollarSign,
  UserPlus,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Menos risco",
    description: "Visão única de fontes oficiais para decidir com segurança.",
  },
  {
    icon: SearchCheck,
    title: "Detecção inteligente",
    description: "IA destaca os sinais relevantes e reduz falsos positivos.",
  },
  {
    icon: Gauge,
    title: "Velocidade",
    description: "Análises completas em segundos para não travar o fluxo comercial.",
  },
  {
    icon: Users,
    title: "Visão 360°",
    description: "Dados de participantes, vínculos e sócios em um só lugar.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas preventivos",
    description: "Monitore mudanças e atue antes da inadimplência acontecer.",
  },
  {
    icon: DollarSign,
    title: "Menor custo",
    description: "Planos flexíveis e preço justo por consulta ou assinatura.",
  },
];

const BenefitsCpf = () => {
  return (
    <section id="beneficios" className="bg-[#05040a] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold">Tudo o que você precisa para aprovar com confiança</h2>
          <p className="mt-3 text-white/70">
            Combine dados profundos do Banco Central, birôs e fontes complementares com IA
            para reduzir perdas e acelerar aprovações.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-3 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <benefit.icon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200/80">
              Pronto para avançar?
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Comece a analisar cadastros com segurança ainda hoje.
            </h3>
            <p className="mt-2 text-white/70">
              Teste o fluxo completo, ganhe bônus de consultas e veja como reduzir prejuízos rapidamente.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 min-w-[200px] bg-purple-600 text-white hover:bg-purple-700"
            >
              <a
                href="https://uzyscore.com.br/auth/register"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Criar conta agora
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 min-w-[200px] border-white/30 text-white hover:bg-white/10"
            >
              <a href="#contato" className="flex items-center justify-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCpf;
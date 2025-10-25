import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  SearchCheck,
  Gauge,
  Users,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      </div>
    </section>
  );
};

export default BenefitsCpf;
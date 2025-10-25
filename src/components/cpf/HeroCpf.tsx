import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlightChips = [
  "Consulta em 5 segundos",
  "SCR do Banco Central",
  "Principais birôs integrados",
];

const featureCards: FeatureCard[] = [
  {
    icon: TrendingUp,
    title: "Score confiável",
    description: "Score detalhado com leitura inteligente do histórico financeiro.",
  },
  {
    icon: Clock3,
    title: "Decisão rápida",
    description: "Motor de crédito prioriza o que importa e reduz falsos positivos.",
  },
  {
    icon: CheckCircle2,
    title: "Pronto para aprovar",
    description: "Recomendações claras para liberar ou não o cadastro com segurança.",
  },
];

const HeroCpf = () => {
  const [document, setDocument] = useState("");

  const formatDocument = (value: string) => {
    if (value.length <= 11) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{4})(\d{2})$/, "$1/$2-$3");
  };

  const handleAnalyze = () => {
    if (document.length === 11 || document.length === 14) {
      toast.success("Consulta enviada para análise.");
      return;
    }
    toast.error("Digite um CPF ou CNPJ válido.");
  };

  const formattedDocument = formatDocument(document);
  const isValid = document.length === 11 || document.length === 14;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070612] to-[#05040a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),transparent_55%)]" />
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/80">
            <Sparkles className="h-4 w-4 text-purple-300" />
            Diminuir prejuízos é a nossa missão
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Consulte CPF ou CNPJ e aprove com confiança em poucos segundos.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Dados oficiais do Banco Central combinados aos principais birôs, organizados por IA,
            para liberar crédito com segurança pelo menor custo do mercado.
          </p>

          <Card className="border-white/10 bg-black/60">
            <CardContent className="space-y-4 p-6">
              <div>
                <span className="text-sm font-medium text-white/70">
                  Informe o documento
                </span>
                <Input
                  value={formattedDocument}
                  onChange={(event) =>
                    setDocument(event.target.value.replace(/\D/g, "").slice(0, 14))
                  }
                  placeholder="000.000.000-00 ou 00.000.000/0001-00"
                  className="mt-2 h-12 border-white/10 bg-white/5 text-center text-base text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!isValid}
                className="h-12 w-full bg-purple-600 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Consultar agora
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                <ShieldCheck className="h-4 w-4 text-purple-300" />
                LGPD, criptografia e auditoria completa
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {highlightChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {featureCards.map((feature) => (
            <Card key={feature.title} className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <feature.icon className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCpf;
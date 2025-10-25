import type { LucideIcon } from "lucide-react";
import { DownloadCloud, BrainCircuit, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: DownloadCloud,
    title: "Coleta em segundos",
    description: "Consultamos SCR, birôs e bases complementares automaticamente.",
  },
  {
    icon: BrainCircuit,
    title: "IA prioriza sinais",
    description: "Modelos próprios destacam os fatores críticos de aprovação ou risco.",
  },
  {
    icon: CheckCircle2,
    title: "Decida com segurança",
    description: "Receba recomendação clara, auditoria e histórico para cada consulta.",
  },
];

const HowWorksCpf = () => {
  return (
    <section id="como-funciona" className="bg-[#060512] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold">Como funciona a análise</h2>
          <p className="mt-3 text-white/70">
            Um fluxo completo, automatizado e transparente para liberar crédito sem insegurança.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-white/10 bg-white/5 text-white">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <step.icon className="h-6 w-6 text-purple-300" />
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Etapa {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorksCpf;
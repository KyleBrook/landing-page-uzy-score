import { Shield, Zap, Brain, Database, Target, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Shield,
    title: "Risco reduzido",
    desc: "Regra clara, auditoria e visão única para decisões de crédito confiáveis."
  },
  {
    icon: Database,
    title: "Dados que importam",
    desc: "SCR do Banco Central + birôs integrados em um só lugar."
  },
  {
    icon: Brain,
    title: "IA que prioriza",
    desc: "Foco nos sinais relevantes e menos falsos positivos."
  },
  {
    icon: Zap,
    title: "Velocidade",
    desc: "Análises completas em segundos, sem fricção."
  },
  {
    icon: Target,
    title: "Acurácia",
    desc: "Preditivo com mais de 400 fontes ponderadas."
  },
  {
    icon: BarChart3,
    title: "Controle",
    desc: "Relatórios, histórico e monitoramento contínuo."
  }
];

const FeatureGridV2 = () => {
  return (
    <section id="beneficios" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Reduza prejuízos e aprove com segurança
          </h2>
          <p className="text-white/70">
            Big Data + IA com foco no que realmente muda sua decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={i} className="bg-neutral-900 border border-neutral-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridV2;
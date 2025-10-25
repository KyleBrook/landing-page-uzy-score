import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, PhoneCall } from "lucide-react";

const stats = [
  {
    label: "Precisão média",
    value: "98%",
    description: "Modelos treinados com dados históricos e sinais comportamentais.",
  },
  {
    label: "Fontes conectadas",
    value: "+400",
    description: "Integração com Banco Central, birôs e bases complementares.",
  },
  {
    label: "Tempo médio",
    value: "5s",
    description: "Análise completa em segundos, sem filas ou processos manuais.",
  },
];

const StatsCpf = () => {
  return (
    <section id="estatisticas" className="bg-[#05040a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <Card key={item.label} className="border-white/10 bg-white/5 text-center text-white">
              <CardContent className="space-y-2 p-6">
                <div className="text-3xl font-bold text-purple-300">{item.value}</div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  {item.label}
                </p>
                <p className="text-sm text-white/60">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-12 w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700"
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
            className="h-12 w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
          >
            <a href="#contato" className="flex items-center justify-center gap-2">
              <PhoneCall className="h-4 w-4" />
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsCpf;
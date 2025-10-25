import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Dados oficiais + complementares",
    points: [
      "SCR do Banco Central, Serasa, Boa Vista, SPC e muito mais",
      "Relações societárias, participações e vínculos atualizados",
    ],
  },
  {
    title: "Monitoramento contínuo",
    points: [
      "Alertas configuráveis para mudanças de risco",
      "Visão consolidada da carteira com indicadores-chave",
    ],
  },
  {
    title: "Experiência segura e simples",
    points: [
      "LGPD, criptografia e logs completos",
      "API ou painel pronto para usar em minutos",
    ],
  },
];

const HighlightsCpf = () => {
  return (
    <section id="diferenciais" className="bg-[#05040a] py-20">
      <div className="container mx-auto px-4 text-white">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge className="mb-4 border border-purple-500/30 bg-purple-500/10 text-purple-200">
            Diferenciais
          </Badge>
          <h2 className="text-3xl font-bold">O que torna a análise Uzy única</h2>
          <p className="mt-3 text-white/70">
            Uma plataforma pensada para reduzir inadimplência, acelerar decisões e diminuir custos.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="border-white/10 bg-white/5">
              <CardContent className="space-y-4 p-6 text-white">
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  {highlight.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsCpf;
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marina, Gestora de Risco",
    quote:
      "Passamos a negar os casos certos e aprovar com confiança. O custo por consulta caiu e o prejuízo também.",
  },
  {
    name: "Rafael, Diretor Financeiro",
    quote:
      "A visão consolidada do BC + birôs com IA fez diferença. Processo mais rápido e assertivo.",
  },
  {
    name: "Lucas, Crédito PJ",
    quote:
      "Monitoramento contínuo e alertas de risco ajudam a agir antes do problema acontecer.",
  },
];

const TestimonialsV2 = () => {
  return (
    <section id="depoimentos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Quem usa, aprova
          </h2>
          <p className="text-white/70">
            Resultados reais com menos custo e mais segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-neutral-900 border border-neutral-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-300 font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-white/90 text-sm">{t.name}</div>
                </div>
                <p className="text-white/80 leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
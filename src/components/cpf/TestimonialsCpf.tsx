import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marina • Gestora de risco",
    quote:
      "A análise consolidada reduziu em 27% nosso índice de inadimplência. Agora negamos os casos certos.",
  },
  {
    name: "Rafael • Diretor financeiro",
    quote:
      "Conseguimos aprovar mais rápido sem abrir mão de segurança. O custo por consulta caiu drasticamente.",
  },
  {
    name: "Lucas • Crédito PJ",
    quote:
      "Os alertas de monitoramento avisam antes do problema acontecer. A equipe ganhou produtividade.",
  },
];

const TestimonialsCpf = () => {
  return (
    <section id="depoimentos" className="bg-[#060512] py-20">
      <div className="container mx-auto px-4 text-white">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Quem usa aprova</h2>
          <p className="mt-3 text-white/70">
            Prefeituras, financeiras, fintechs e varejistas usam o Uzy para decidir com confiança.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-white/10 bg-white/5 text-white transition hover:border-purple-400/40"
            >
              <CardContent className="space-y-4 p-6">
                <p className="text-sm text-white/60">{testimonial.name}</p>
                <p className="text-base leading-relaxed text-white/80">
                  “{testimonial.quote}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCpf;
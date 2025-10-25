import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais dados entram na análise?",
    answer:
      "Usamos SCR do Banco Central, principais birôs (Serasa, Boa Vista, SPC), bases complementares e informações de vínculos societários.",
  },
  {
    question: "Quanto tempo leva para receber o resultado?",
    answer:
      "A consulta é processada em cerca de 5 segundos. O resultado, com score e recomendação, aparece instantaneamente no painel.",
  },
  {
    question: "Posso integrar com meu sistema?",
    answer:
      "Sim. Oferecemos API REST com autenticação segura e documentação completa para integrar ao seu fluxo ou core bancário.",
  },
  {
    question: "Existe monitoramento recorrente?",
    answer:
      "Você pode monitorar sua carteira e configurar alertas inteligentes sempre que houver mudança relevante nos clientes analisados.",
  },
];

const FaqCpf = () => {
  return (
    <section id="faq" className="bg-[#05040a] py-20">
      <div className="container mx-auto px-4 text-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
          <p className="mt-3 text-white/70">
            Se tiver qualquer outra dúvida, fale com nosso time e receba uma demonstração completa.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-xl border border-white/10 bg-white/5 px-4"
            >
              <AccordionTrigger className="text-left text-base text-white hover:text-purple-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-white/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqCpf;
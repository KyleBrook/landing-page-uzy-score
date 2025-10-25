import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { UserPlus, PhoneCall } from "lucide-react";

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

        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
          <h3 className="text-2xl font-semibold text-white">
            Ainda tem alguma questão?
          </h3>
          <p className="max-w-2xl text-white/70">
            Nosso time está pronto para tirar dúvidas, mostrar o painel ao vivo e indicar o plano ideal para sua operação.
          </p>
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

export default FaqCpf;
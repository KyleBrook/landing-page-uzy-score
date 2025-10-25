import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone } from "lucide-react";

const FinalCtaCpf = () => {
  return (
    <section id="contato" className="bg-[#060512] py-20">
      <div className="container mx-auto px-4">
        <Card className="border-purple-500/30 bg-gradient-to-r from-purple-600/20 via-purple-500/15 to-purple-700/25 text-white">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-200/80">
                Pronto para reduzir prejuízos?
              </p>
              <h2 className="text-3xl font-bold">
                Fale com um especialista e veja a análise funcionando na prática.
              </h2>
              <p className="text-white/70">
                Integração simples, onboarding rápido e planos flexíveis para começar ainda hoje.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 gap-2 bg-white text-purple-700 hover:bg-white/90"
              >
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 gap-2 border-white/40 text-white hover:bg-white/10"
              >
                <a href="#faq">
                  Ver dúvidas comuns
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCtaCpf;
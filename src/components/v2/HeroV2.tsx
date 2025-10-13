import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const HeroV2 = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/branding/bg-fundo.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#0b0b0f]/90" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-white/80">
              Dados profundos + IA • Menor custo por consulta
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Diminua prejuízos com decisões de crédito mais inteligentes.
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Banco Central + birôs de crédito analisados por IA, para aprovar com segurança e pagar menos por consulta.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-6" asChild>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="h-12 px-6 border-white/20 text-white hover:bg-white/10" asChild>
              <a href="#como-funciona">
                Ver como funciona
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/60">
            <div className="text-sm">SCR do Banco Central</div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-sm">Integração com birôs líderes</div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-sm">LGPD e criptografia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
import { HeaderV2, HeroV2, FeatureGridV2, TestimonialsV2, FooterV2, FloatingContact } from "../components/v2";
import { Button } from "@/components/ui/button";

const V2 = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <HeaderV2 />
      <main>
        <HeroV2 />
        <section id="como-funciona" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <div className="text-sm text-purple-300 mb-2">1. Consulta</div>
                <h3 className="text-xl font-semibold mb-2">BC + Birôs</h3>
                <p className="text-white/70">
                  Buscamos as fontes mais relevantes (SCR do Banco Central e birôs) em segundos.
                </p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <div className="text-sm text-purple-300 mb-2">2. Análise</div>
                <h3 className="text-xl font-semibold mb-2">IA prioriza o que importa</h3>
                <p className="text-white/70">
                  Sinais de risco organizados e ponderados para reduzir falsos positivos.
                </p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <div className="text-sm text-purple-300 mb-2">3. Decisão</div>
                <h3 className="text-xl font-semibold mb-2">Aprove com segurança</h3>
                <p className="text-white/70">
                  Recomendação clara, auditoria e histórico — com o menor custo por consulta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGridV2 />
        <TestimonialsV2 />

        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm text-purple-300 mb-2">Pronto para reduzir prejuízos?</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Fale com um especialista e veja como funciona.
                </h3>
                <p className="text-white/70">
                  Integração simples, resultado rápido e preço justo.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white h-12">
                  <a href="https://wa.me/" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
                </Button>
                <Button variant="outline" className="h-12 border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="#como-funciona">Ver como funciona</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterV2 />
      <FloatingContact />
    </div>
  );
};

export default V2;
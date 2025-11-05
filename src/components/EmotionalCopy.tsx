import { AlertTriangle, Shield, Database, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/556136867068";

const EmotionalCopy = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-purple-300">
            <span className="text-sm font-medium">Nosso objetivo é simples</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Diminuir prejuízos por crédito mal concedido.
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Informações mais profundas e relevantes do Banco Central e dos principais birôs, cruzadas por IA, pelo menor custo do mercado.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border border-neutral-800 bg-neutral-900">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <AlertTriangle className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">A dor</h3>
              <p className="text-white/70">
                Inadimplência e cadastros aprovados sem visão completa geram perdas que poderiam ser evitadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-neutral-800 bg-neutral-900">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <Database className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">A solução</h3>
              <p className="text-white/70">
                Dados profundos do Banco Central (SCR) + birôs líderes, analisados por IA que cruza mais de 400 fontes.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-neutral-800 bg-neutral-900">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <DollarSign className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">O diferencial</h3>
              <p className="text-white/70">
                O menor custo do mercado para decidir com segurança sobre qualquer cadastro que gera risco de crédito.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-white/80">Decisão com segurança</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Libere cadastros com confiança — e pague menos por isso.
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-purple-400" />
                  <span>SCR do Banco Central + birôs (Serasa, Boa Vista e outros) em uma visão única</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-purple-400" />
                  <span>IA que prioriza os riscos relevantes e reduz falsos positivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-purple-400" />
                  <span>Preço justo: primeiras consultas por nossa conta com o cupom UZY2</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block rounded-xl border border-neutral-800 bg-neutral-950 p-5 text-left shadow-sm">
                <div className="text-sm text-white/60">Exemplo de resultado</div>
                <div className="mt-1 text-3xl font-bold text-white">Risco: Baixo</div>
                <div className="font-semibold text-purple-400">Recomendação: Aprovar</div>
                <div className="mt-2 text-sm text-white/60">Tempo médio: 5s • Precisão: 98%</div>
              </div>
              <Button
                asChild
                className="h-12 w-full rounded-xl bg-purple-600 px-6 text-white hover:bg-purple-700 md:w-auto"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Começar agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalCopy;
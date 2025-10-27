import { AlertTriangle, Shield, Database, DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EmotionalCopy = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 rounded-full px-4 py-2 mb-4 border border-purple-500/20">
            <span className="text-sm font-medium">Nosso objetivo é simples</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Diminuir prejuízos por crédito mal concedido.
          </h2>
          <p className="text-lg text-white/70 mt-3">
            Informações mais profundas e relevantes do Banco Central e dos principais birôs, cruzadas por IA, pelo menor custo do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-neutral-900 border border-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">A dor</h3>
              <p className="text-white/70">
                Inadimplência e cadastros aprovados sem visão completa geram perdas que poderiam ser evitadas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border border-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">A solução</h3>
              <p className="text-white/70">
                Dados profundos do Banco Central (SCR) + birôs líderes, analisados por IA que cruza mais de 400 fontes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border border-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">O diferencial</h3>
              <p className="text-white/70">
                O menor custo do mercado para decidir com segurança sobre qualquer cadastro que gera risco de crédito.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 border border-neutral-800">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-white/80">Decisão com segurança</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Libere cadastros com confiança — e pague menos por isso.
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>SCR do Banco Central + birôs (Serasa, Boa Vista e outros) em uma visão única</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>IA que prioriza os riscos relevantes e reduz falsos positivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>Preço justo: pague por consulta ou assine e reduza ainda mais o custo</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block text-left bg-neutral-950 border border-neutral-800 rounded-xl p-5 shadow-sm mb-4">
                <div className="text-sm text-white/60">Exemplo de resultado</div>
                <div className="text-3xl font-bold text-white mt-1">Risco: Baixo</div>
                <div className="text-purple-400 font-semibold">Recomendação: Aprovar</div>
                <div className="text-white/60 text-sm mt-2">Tempo médio: 5s • Precisão: 98%</div>
              </div>
              <Button
                asChild
                className="w-full md:w-auto px-6 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
              >
                <a href="https://wa.me/556136867068" target="_blank" rel="noreferrer">
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
import { AlertTriangle, Shield, Database, DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EmotionalCopy = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">Nosso objetivo é simples</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Diminuir prejuízos por crédito mal concedido.
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Informações mais profundas e relevantes do Banco Central e dos principais birôs, cruzadas por IA, pelo menor custo do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A dor</h3>
              <p className="text-gray-600">
                Inadimplência e cadastros aprovados sem visão completa geram perdas que poderiam ser evitadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A solução</h3>
              <p className="text-gray-600">
                Dados profundos do Banco Central (SCR) + birôs líderes, analisados por IA que cruza mais de 400 fontes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">O diferencial</h3>
              <p className="text-gray-600">
                O menor custo do mercado para decidir com segurança sobre qualquer cadastro que gera risco de crédito.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Decisão com segurança</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Libere cadastros com confiança — e pague menos por isso.
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>SCR do Banco Central + birôs (Serasa, Boa Vista e outros) em uma visão única</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>IA que prioriza os riscos relevantes e reduz falsos positivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>Preço justo: pague por consulta ou assine e reduza ainda mais o custo</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block text-left bg-white border border-gray-100 rounded-xl p-5 shadow-sm mb-4">
                <div className="text-sm text-gray-500">Exemplo de resultado</div>
                <div className="text-3xl font-bold text-gray-900 mt-1">Risco: Baixo</div>
                <div className="text-emerald-600 font-semibold">Recomendação: Aprovar</div>
                <div className="text-gray-500 text-sm mt-2">Tempo médio: 5s • Precisão: 98%</div>
              </div>
              <Button className="w-full md:w-auto px-6 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalCopy;
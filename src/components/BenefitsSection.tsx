import { TrendingDown, Zap, Target, BarChart3, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Menos prejuízos',
      description: 'Decisões mais seguras com dados do Banco Central e birôs, priorizados por IA.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100'
    },
    {
      icon: Zap,
      title: 'Mais velocidade',
      description: 'Análises completas em segundos, sem fricção operacional.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    {
      icon: Target,
      title: 'Mais acurácia',
      description: 'IA destaca o que importa e reduz falsos positivos.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100'
    },
    {
      icon: BarChart3,
      title: 'Mais controle',
      description: 'Histórico, auditoria e visão única para a tomada de decisão.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100'
    },
    {
      icon: Clock,
      title: 'Menos custo',
      description: 'Planos e avulsas com o melhor preço por consulta.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100'
    },
    {
      icon: Shield,
      title: 'Mais segurança',
      description: 'LGPD, dados criptografados e fontes oficiais.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium">Nosso objetivo é simples</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Reduzir prejuízos com decisões de crédito melhores
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dados profundos, IA e o menor custo por consulta para aprovar com confiança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {benefits.map((benefit, index) => (
          <Card key={index} className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${benefit.borderColor} border-l-4`}>
            <CardContent className="p-8">
              <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estatísticas impressionantes */}
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Números que importam</h3>
            <p className="text-xl text-gray-600">Menos tempo, menos custo e muito mais segurança</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-3">+400</div>
              <div className="text-gray-600 text-lg">Fontes integradas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">98%</div>
              <div className="text-gray-600 text-lg">Precisão na análise</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">24/7</div>
              <div className="text-gray-600 text-lg">Monitoramento contínuo</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-3">5s</div>
              <div className="text-gray-600 text-lg">Tempo médio de análise</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BenefitsSection;
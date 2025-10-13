import { TrendingDown, Zap, Target, BarChart3, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Menos prejuízos',
      description: 'Decisões mais seguras com dados do Banco Central e birôs, priorizados por IA.'
    },
    {
      icon: Zap,
      title: 'Mais velocidade',
      description: 'Análises completas em segundos, sem fricção operacional.'
    },
    {
      icon: Target,
      title: 'Mais acurácia',
      description: 'IA destaca o que importa e reduz falsos positivos.'
    },
    {
      icon: BarChart3,
      title: 'Mais controle',
      description: 'Histórico, auditoria e visão única para a tomada de decisão.'
    },
    {
      icon: Clock,
      title: 'Menos custo',
      description: 'Planos e avulsas com o melhor preço por consulta.'
    },
    {
      icon: Shield,
      title: 'Mais segurança',
      description: 'LGPD, dados criptografados e fontes oficiais.'
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 text-white rounded-full px-4 py-2 mb-5 border border-white/10">
          <span className="text-sm font-medium">Nosso objetivo é simples</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Reduzir prejuízos com decisões de crédito melhores
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Dados profundos, IA e o menor custo por consulta para aprovar com confiança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="group transition-all duration-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700"
          >
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/15 transition-colors">
                <benefit.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-neutral-900 border border-neutral-800">
        <CardContent className="p-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Números que importam</h3>
            <p className="text-white/70">Menos tempo, menos custo e muito mais segurança</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">+400</div>
              <div className="text-white/70">Fontes integradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-white/70">Precisão na análise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white/70">Monitoramento contínuo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5s</div>
              <div className="text-white/70">Tempo médio de análise</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BenefitsSection;
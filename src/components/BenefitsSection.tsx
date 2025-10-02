import { TrendingDown, Zap, Target, BarChart3, Clock, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Diminua perdas',
      description: 'Nossa IA consegue analisar 100% das operações e permite que você faça análise de crédito, concessão e gestão de crédito de forma automatizada.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100'
    },
    {
      icon: Zap,
      title: 'Acelere processos',
      description: 'Automatize processos da sua gestão de crédito, como análise de cedentes, sacados, NFs, títulos, cadastros e limite de crédito.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    {
      icon: Target,
      title: 'Padronize análises',
      description: 'Defina perfis, parametrize regras e políticas de crédito e estipule limites para ação comercial de forma automatizada.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100'
    },
    {
      icon: BarChart3,
      title: 'Gestão completa',
      description: 'Soluções que contribuem com sua empresa em todas as etapas da gestão de crédito, da análise ao monitoramento de carteira.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100'
    },
    {
      icon: Clock,
      title: 'Análises assertivas',
      description: 'Em uma única plataforma tenha acesso a todos os dados relevantes para melhor tomada de decisão na análise de crédito.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100'
    },
    {
      icon: Shield,
      title: 'Monitore riscos ESG',
      description: 'Identifique, avalie e gerencie riscos ambientais, sociais e de governança. Mitigue riscos e garanta o cumprimento das boas práticas.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium">Por que escolher o ScoreFy?</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Análises que levavam <span className="text-emerald-600">dias</span>
          <br />
          agora levam <span className="text-blue-600">segundos</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolucione sua gestão de crédito com inteligência artificial e automação completa
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Números que impressionam</h3>
            <p className="text-xl text-gray-600">Resultados comprovados em análise de crédito</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-3">+400</div>
              <div className="text-gray-600 text-lg">Fontes de dados integradas</div>
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
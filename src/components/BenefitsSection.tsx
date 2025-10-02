import { TrendingDown, Zap, Target, BarChart3, Clock, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import GlassCard from './GlassCard';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Diminua perdas',
      description: 'Nossa IA consegue analisar 100% das operações e permite que você faça análise de crédito, concessão e gestão de crédito de forma automatizada.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Zap,
      title: 'Acelere processos',
      description: 'Automatize processos da sua gestão de crédito, como análise de cedentes, sacados, NFs, títulos, cadastros e limite de crédito.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Target,
      title: 'Padronize análises de crédito',
      description: 'Defina perfis, parametrize regras e políticas de crédito e estipule limites para ação comercial de forma automatizada.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: BarChart3,
      title: 'Realize gestão de crédito de ponta a ponta',
      description: 'Temos soluções que contribuem com sua empresa em todas as etapas da gestão de crédito, da análise ao monitoramento de carteira.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Clock,
      title: 'Faça análises de crédito mais assertivas',
      description: 'Em uma única plataforma tenha acesso a todos os dados relevantes para melhor tomada de decisão na análise de crédito.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Shield,
      title: 'Monitore riscos de ESG',
      description: 'Identifique, avalie e gerencie riscos ambientais, sociais e de governança. Mitigue riscos e garanta o cumprimento das boas práticas.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: AlertTriangle,
      title: 'Reduza inadimplência',
      description: 'Conheça a fundo o perfil creditício do seu cliente ou fornecedor e monitore de forma automatizada toda a carteira de negócios.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          Com o <span className="text-emerald-400">ScoreFy</span>, análises de crédito que levavam
          <br />
          dias para serem concluídas, <span className="text-blue-400">passam a levar segundos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <GlassCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Estatísticas */}
      <GlassCard className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">+400</div>
            <div className="text-white/70">Fontes de dados integradas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-white/70">Precisão na análise</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white/70">Monitoramento contínuo</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-2">5s</div>
            <div className="text-white/70">Tempo médio de análise</div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default BenefitsSection;
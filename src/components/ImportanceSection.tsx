import { Shield, TrendingUp, AlertTriangle, CheckCircle, Users, Building } from 'lucide-react';
import GlassCard from './GlassCard';

const ImportanceSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Contra Fraudes',
      description: 'Monitore seu CPF e identifique atividades suspeitas antes que causem problemas',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Melhores Condições de Crédito',
      description: 'Conheça seu perfil para negociar taxas mais baixas e limites maiores',
      color: 'text-emerald-400'
    },
    {
      icon: AlertTriangle,
      title: 'Prevenção de Inadimplência',
      description: 'Identifique riscos antes que se tornem problemas financeiros graves',
      color: 'text-orange-400'
    },
    {
      icon: CheckCircle,
      title: 'Decisões Mais Inteligentes',
      description: 'Tome decisões financeiras baseadas em dados reais e análises precisas',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Por que é Importante Conhecer seu 
          <span className="text-emerald-400"> Perfil de Crédito?</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Seu perfil de crédito é sua identidade financeira. Conhecê-lo profundamente é essencial 
          para tomar decisões inteligentes e proteger seu futuro financeiro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-white/10 ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">O que Você Precisa Saber</h3>
          <p className="text-white/70">
            Mais de 60% dos brasileiros não conhecem seu próprio score de crédito
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-400">62%</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Não Conhecem o Score</h4>
            <p className="text-white/60 text-sm">Dos brasileiros não sabem qual é seu score de crédito atual</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-400">45%</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Crédito Negado</h4>
            <p className="text-white/60 text-sm">Das solicitações de crédito são negadas por falta de informação</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-400">80%</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Melhores Condições</h4>
            <p className="text-white/60 text-sm">Conseguem melhores taxas quem conhece seu perfil de crédito</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ImportanceSection;
import { CreditCard, FileText, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';

const QuickActions = () => {
  const actions = [
    {
      icon: CreditCard,
      title: 'Simular Crédito',
      description: 'Veja suas opções de crédito',
      color: 'text-blue-400'
    },
    {
      icon: FileText,
      title: 'Relatório Completo',
      description: 'Baixe seu relatório detalhado',
      color: 'text-emerald-400'
    },
    {
      icon: TrendingUp,
      title: 'Melhorar Score',
      description: 'Dicas para aumentar seu score',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Monitoramento',
      description: 'Ative alertas de mudanças',
      color: 'text-orange-400'
    }
  ];

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Ações Rápidas</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-4 justify-start bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl"
          >
            <div className="flex items-center gap-3 w-full">
              <div className={`p-2 rounded-lg bg-white/10 ${action.color}`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-white">{action.title}</h4>
                <p className="text-white/60 text-sm">{action.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </GlassCard>
  );
};

export default QuickActions;
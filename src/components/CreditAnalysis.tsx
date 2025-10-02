import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';

interface CreditFactor {
  name: string;
  value: string;
  impact: 'positive' | 'negative' | 'neutral';
  description: string;
}

interface CreditAnalysisProps {
  factors: CreditFactor[];
}

const CreditAnalysis = ({ factors }: CreditAnalysisProps) => {
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'negative':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'border-l-green-400';
      case 'negative':
        return 'border-l-red-400';
      default:
        return 'border-l-yellow-400';
    }
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-emerald-400" />
        Análise Detalhada
      </h3>
      
      <div className="space-y-4">
        {factors.map((factor, index) => (
          <div
            key={index}
            className={cn(
              'p-4 rounded-xl bg-white/5 border-l-4 hover:bg-white/10 transition-all duration-300',
              getImpactColor(factor.impact)
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getImpactIcon(factor.impact)}
                  <h4 className="font-medium text-white">{factor.name}</h4>
                </div>
                <p className="text-white/70 text-sm mb-2">{factor.description}</p>
                <span className="text-emerald-400 font-semibold">{factor.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default CreditAnalysis;
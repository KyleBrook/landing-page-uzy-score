import { Calendar, CreditCard, DollarSign } from 'lucide-react';
import GlassCard from './GlassCard';
import { Badge } from '@/components/ui/badge';

interface HistoryItem {
  date: string;
  type: string;
  amount: string;
  status: 'paid' | 'pending' | 'late';
  institution: string;
}

interface CreditHistoryProps {
  history: HistoryItem[];
}

const CreditHistory = ({ history }: CreditHistoryProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'late':
        return 'bg-red-500/20 text-red-400 border-red-400/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Pago';
      case 'pending':
        return 'Pendente';
      case 'late':
        return 'Atrasado';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-emerald-400" />
        Histórico de Crédito
      </h3>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{item.type}</h4>
                  <p className="text-white/60 text-sm">{item.institution}</p>
                </div>
              </div>
              <Badge className={getStatusColor(item.status)}>
                {getStatusText(item.status)}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">{item.date}</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {item.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default CreditHistory;
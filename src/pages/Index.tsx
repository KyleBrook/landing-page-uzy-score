import { useState } from 'react';
import Header from '@/components/Header';
import GlassCard from '@/components/GlassCard';
import ScoreCircle from '@/components/ScoreCircle';
import CreditAnalysis from '@/components/CreditAnalysis';
import CreditHistory from '@/components/CreditHistory';
import QuickActions from '@/components/QuickActions';
import ImportanceSection from '@/components/ImportanceSection';
import PricingSection from '@/components/PricingSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, ArrowDown } from 'lucide-react';

const Index = () => {
  const [cpf, setCpf] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Dados simulados
  const creditFactors = [
    {
      name: 'Histórico de Pagamentos',
      value: '98% pontual',
      impact: 'positive' as const,
      description: 'Excelente histórico de pagamentos em dia'
    },
    {
      name: 'Utilização do Cartão',
      value: '35% do limite',
      impact: 'neutral' as const,
      description: 'Uso moderado do limite disponível'
    },
    {
      name: 'Tempo de Relacionamento',
      value: '8 anos',
      impact: 'positive' as const,
      description: 'Longo relacionamento com instituições financeiras'
    },
    {
      name: 'Consultas Recentes',
      value: '3 nos últimos 6 meses',
      impact: 'negative' as const,
      description: 'Muitas consultas podem indicar necessidade de crédito'
    }
  ];

  const creditHistory = [
    {
      date: '15/12/2024',
      type: 'Cartão de Crédito',
      amount: 'R$ 2.450,00',
      status: 'paid' as const,
      institution: 'Banco XYZ'
    },
    {
      date: '10/12/2024',
      type: 'Financiamento Veicular',
      amount: 'R$ 890,00',
      status: 'paid' as const,
      institution: 'Financeira ABC'
    },
    {
      date: '05/12/2024',
      type: 'Empréstimo Pessoal',
      amount: 'R$ 1.200,00',
      status: 'pending' as const,
      institution: 'Banco DEF'
    },
    {
      date: '28/11/2024',
      type: 'Cartão de Crédito',
      amount: 'R$ 3.100,00',
      status: 'late' as const,
      institution: 'Banco GHI'
    }
  ];

  const handleSearch = () => {
    if (cpf.length >= 11) {
      setShowResults(true);
    }
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 pb-8 relative z-10">
        {!showResults ? (
          <>
            {/* Tela de busca inicial */}
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Análise de Crédito
                  <span className="text-emerald-400"> Inteligente</span>
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-6">
                  Descubra seu perfil de crédito completo com análise avançada e insights personalizados
                </p>
                
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('importance')}
                  className="text-white/60 hover:text-white hover:bg-white/10 mb-8"
                >
                  Saiba por que é importante
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <GlassCard className="p-8 max-w-md w-full">
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Digite seu CPF
                    </label>
                    <Input
                      type="text"
                      placeholder="000.000.000-00"
                      value={formatCPF(cpf)}
                      onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 11))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-center text-lg"
                      maxLength={14}
                    />
                  </div>
                  
                  <Button
                    onClick={handleSearch}
                    disabled={cpf.length < 11}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Consultar Score
                  </Button>
                  
                  <p className="text-white/60 text-sm">
                    Consulta segura e protegida por criptografia
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Seção de Importância */}
            <section id="importance" className="py-16">
              <ImportanceSection />
            </section>

            {/* Seção de Preços */}
            <section id="pricing" className="py-16">
              <PricingSection />
            </section>
          </>
        ) : (
          // Tela de resultados
          <div className="space-y-6">
            {/* Score Principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <GlassCard className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-white mb-6">Seu Score</h2>
                  <ScoreCircle score={742} size="lg" className="mx-auto mb-6" />
                  <div className="space-y-2">
                    <p className="text-emerald-400 font-semibold">Score Bom</p>
                    <p className="text-white/70 text-sm">
                      Você tem boas chances de aprovação para crédito
                    </p>
                  </div>
                </GlassCard>
              </div>
              
              <div className="lg:col-span-2">
                <QuickActions />
              </div>
            </div>
            
            {/* Análise e Histórico */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CreditAnalysis factors={creditFactors} />
              <CreditHistory history={creditHistory} />
            </div>
            
            {/* Botão para nova consulta */}
            <div className="text-center">
              <Button
                onClick={() => {
                  setShowResults(false);
                  setCpf('');
                }}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Nova Consulta
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
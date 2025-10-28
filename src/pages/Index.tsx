import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import DataSourcesSection from '@/components/DataSourcesSection';
import ImportanceSection from '@/components/ImportanceSection';
import GlassCard from '@/components/GlassCard';
import ScoreCircle from '@/components/ScoreCircle';
import CreditAnalysis from '@/components/CreditAnalysis';
import CreditHistory from '@/components/CreditHistory';
import QuickActions from '@/components/QuickActions';
import PricingSection from '@/components/PricingSection';
import EmotionalCopy from '@/components/EmotionalCopy';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = "https://w.app/promolp";

const Index = () => {
  const [cpf, setCpf] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Dados simulados
  const creditFactors = [
    {
      name: 'Score SCR',
      value: '742 pontos',
      impact: 'positive' as const,
      description: 'Score do Sistema de Informações de Crédito do Banco Central'
    },
    {
      name: 'Classificação de Risco',
      value: 'Baixo Risco',
      impact: 'positive' as const,
      description: 'Classificação baseada em análise de múltiplas variáveis'
    },
    {
      name: 'Análise de Inadimplência',
      value: '2.3% probabilidade',
      impact: 'positive' as const,
      description: 'Probabilidade de inadimplência nos próximos 12 meses'
    },
    {
      name: 'Composição da Carteira',
      value: '65% cartão, 35% financiamentos',
      impact: 'neutral' as const,
      description: 'Distribuição dos tipos de crédito utilizados'
    },
    {
      name: 'Consultas Recentes',
      value: '3 nos últimos 6 meses',
      impact: 'negative' as const,
      description: 'Número de consultas ao CPF por instituições financeiras'
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

  const handleSearch = (_searchCpf: string) => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f]">
      {!showResults ? (
        <>
          {/* Hero Section - fundo escuro com imagem sutil da marca */}
          <div className="relative">
            {/* Background enviado (suavizado) */}
            <div className="absolute inset-0">
              <img
                src="/branding/bg-fundo.png"
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* Overlay sutil (sem degradê colorido) */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <Header />
            
            <div className="container mx-auto px-4 pb-10 relative z-10">
              <HeroSection onSearch={handleSearch} cpf={cpf} setCpf={setCpf} />
            </div>
          </div>

          {/* Seção de copy direta */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <EmotionalCopy />
            </div>
          </div>

          {/* Benefits Section - Dark */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <BenefitsSection />
            </div>
          </div>

          {/* Features Section - Dark sem degradê fora da paleta */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <FeaturesSection />
            </div>
          </div>

          {/* Data Sources Section - Dark */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <DataSourcesSection />
            </div>
          </div>

          {/* Importance Section - Dark */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <ImportanceSection />
            </div>
          </div>

          {/* Pricing Section - deixamos como contraste claro controlado */}
          <div className="bg-[#0b0b0f]">
            <div className="container mx-auto px-4">
              <PricingSection />
            </div>
          </div>
        </>
      ) : (
        // Tela de resultados - Dark
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[#0b0b0f]" />
          <Header />
          <div className="container mx-auto px-4 pb-8 relative z-10">
            <div className="space-y-6 pt-8">
              {/* Score Principal */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <GlassCard className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Análise Completa</h2>
                    <ScoreCircle score={742} size="lg" className="mx-auto mb-6" />
                    <div className="space-y-2">
                      <p className="text-purple-400 font-semibold">Score Bom</p>
                      <p className="text-white/70 text-sm">
                        Análise baseada em IA e Big Data
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
              
              {/* IA Analysis */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🧠 Análise Inteligente por IA
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed">
                    <strong className="text-purple-400">Resumo da Análise:</strong> O perfil analisado apresenta 
                    características de baixo risco creditício. Com score de 742 pontos e histórico de pagamentos 
                    consistente, recomenda-se aprovação para operações de crédito de até R$ 50.000. 
                    A probabilidade de inadimplência calculada é de apenas 2.3%, significativamente abaixo 
                    da média do mercado. Monitoramento recomendado devido ao aumento recente de consultas.
                  </p>
                </div>
              </GlassCard>
              
              {/* Botão para nova consulta */}
              <div className="text-center">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Nova Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
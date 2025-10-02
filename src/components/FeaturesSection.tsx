import { useState } from 'react';
import { Brain, Database, Eye, Workflow, Building, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('motor');

  const tabs = [
    { id: 'motor', label: 'Motor de crédito', icon: Brain },
    { id: 'plataforma', label: 'Plataforma Big Data + IA', icon: Database },
    { id: 'monitoramento', label: 'Monitoramento de carteira', icon: Eye },
    { id: 'workflow', label: 'Workflow de crédito', icon: Workflow }
  ];

  const tabContent = {
    motor: {
      title: 'Motor de crédito',
      description: 'Com a tecnologia de Inteligência Artificial, o motor cruza dados de diferentes fontes para fazer recomendações ou até mesmo automatizar a concessão de crédito de acordo com parâmetros pré-estabelecidos, tornando esse processo mais confiável e ágil. Com o motor de crédito é possível analisar diversas informações em segundos!',
      features: [
        'Análise automatizada de risco',
        'Decisões em tempo real',
        'Integração com bureaus de crédito',
        'Parametrização personalizável',
        'Histórico completo de decisões'
      ],
      illustration: '🚀'
    },
    plataforma: {
      title: 'Plataforma Big Data + IA',
      description: 'Plataforma de Big Data integrada à Inteligência Artificial para o segmento de crédito. Através da consulta de CNPJ ou nome de empresa, é possível ter de forma organizada todos os dados necessários para realizar sua análise de crédito completa com mais agilidade e monitorar sua carteira!',
      features: [
        'Mais de 400 fontes de dados',
        'Análise preditiva avançada',
        'Dashboard em tempo real',
        'Relatórios personalizados',
        'API para integração'
      ],
      illustration: '🧠'
    },
    monitoramento: {
      title: 'Monitoramento de carteira',
      description: 'Monitore automaticamente o pós-crédito de clientes, fornecedores, empresas e os mais diversos stakeholders que envolvem o seu negócio! A partir da criação de parâmetros, a plataforma monitora 100% da sua carteira de crédito 24h/dia e traz mais segurança ao seu negócio.',
      features: [
        'Alertas automáticos de risco',
        'Monitoramento 24/7',
        'Análise de comportamento',
        'Relatórios de performance',
        'Gestão de limites dinâmica'
      ],
      illustration: '👁️'
    },
    workflow: {
      title: 'Workflow de crédito',
      description: 'Automatize tarefas manuais da sua gestão de crédito, centralize processos e conecte sua equipe em um só lugar, gerenciando com praticidade todos os fluxos de trabalho, processos e tarefas do seu negócio. Tenha mais rastreabilidade do início ao fim do processo e elimine trocas de e-mails e cobranças nos corredores.',
      features: [
        'Fluxos personalizáveis',
        'Aprovações automáticas',
        'Notificações inteligentes',
        'Auditoria completa',
        'Integração com sistemas'
      ],
      illustration: '⚡'
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          Revolucione sua gestão de crédito com{' '}
          <span className="text-emerald-400">inteligência artificial</span> e{' '}
          <span className="text-blue-400">automação</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Content */}
      <GlassCard className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">{currentContent.title}</h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            
            <div className="space-y-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-3xl flex items-center justify-center border border-white/10">
              <div className="text-8xl">{currentContent.illustration}</div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default FeaturesSection;
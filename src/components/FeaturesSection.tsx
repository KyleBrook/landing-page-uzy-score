import { useState } from 'react';
import { Brain, Database, Eye, Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import IsometricIllustration from './IsometricIllustration';

const WHATSAPP_URL = "https://w.app/promolp";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('motor');

  const tabs = [
    { 
      id: 'motor', 
      label: 'Motor de crédito', 
      icon: Brain
    },
    { 
      id: 'plataforma', 
      label: 'Plataforma Big Data + IA', 
      icon: Database
    },
    { 
      id: 'monitoramento', 
      label: 'Monitoramento de carteira', 
      icon: Eye
    },
    { 
      id: 'workflow', 
      label: 'Workflow de crédito', 
      icon: Workflow
    }
  ];

  const tabContent = {
    motor: {
      title: 'Decida com segurança pelo menor custo',
      subtitle: 'Banco Central + birôs de crédito analisados por IA',
      description: 'Nossa IA cruza dados do SCR (Banco Central) e dos principais birôs do mercado para reduzir prejuízos e acelerar aprovações com confiança.',
      features: [
        'Análise automatizada de risco em segundos',
        'Decisões baseadas nas fontes mais relevantes',
        'Integração com bureaus líderes do mercado',
        'Parametrização simples e transparente',
        'Histórico completo e auditoria de decisões'
      ]
    },
    plataforma: {
      title: 'Visão única realmente relevante',
      subtitle: 'Mais de 400 fontes, foco no que importa',
      description: 'Uma plataforma que organiza, pondera e prioriza os dados que fazem diferença para sua decisão de crédito.',
      features: [
        'Consolidação de dados críticos do BC e birôs',
        'Análise preditiva com IA',
        'Dashboard em tempo real',
        'Relatórios claros e exportáveis',
        'API para integrar no seu fluxo'
      ]
    },
    monitoramento: {
      title: 'Reduza risco após a concessão',
      subtitle: 'Alertas inteligentes 24/7',
      description: 'Monitore automaticamente sua carteira e receba alertas de mudanças que podem comprometer o pagamento.',
      features: [
        'Alertas de risco configuráveis',
        'Monitoramento contínuo',
        'Análise comportamental',
        'Relatórios de performance',
        'Gestão dinâmica de limites'
      ]
    },
    workflow: {
      title: 'Padronize e acelere o crédito',
      subtitle: 'Processos claros e auditáveis',
      description: 'Automatize etapas manuais, defina regras claras e conecte sua equipe em um só lugar.',
      features: [
        'Fluxos personalizáveis',
        'Aprovações automáticas por regras',
        'Notificações direcionadas',
        'Auditoria completa',
        'Integração nativa'
      ]
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
          <span className="text-white/90 text-sm font-medium">Dados profundos para decisões melhores</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Reduza prejuízos com
          <br />
          <span className="text-purple-400">Banco Central + birôs + IA</span>
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          O que você precisa ver, em segundos — pelo menor custo por consulta.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 text-sm ${
                isActive
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
              variant="ghost"
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </Button>
          );
        })}
      </div>

      <Card className="bg-neutral-900 border border-neutral-800">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  {currentTab && <currentTab.icon className="w-7 h-7 text-purple-400" />}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{currentContent.title}</h3>
                  <p className="text-lg text-white/70 mt-1">{currentContent.subtitle}</p>
                </div>
              </div>
              
              <p className="text-base text-white/80 mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="space-y-3">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Saiba mais
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <IsometricIllustration />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturesSection;
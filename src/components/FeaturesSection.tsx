import { useState } from 'react';
import { Brain, Database, Eye, Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import IsometricIllustration from './IsometricIllustration';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('motor');

  const tabs = [
    { 
      id: 'motor', 
      label: 'Motor de crédito', 
      icon: Brain,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    { 
      id: 'plataforma', 
      label: 'Plataforma Big Data + IA', 
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      id: 'monitoramento', 
      label: 'Monitoramento de carteira', 
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      id: 'workflow', 
      label: 'Workflow de crédito', 
      icon: Workflow,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
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
    <section className="py-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="text-white/90 text-sm font-medium">Dados profundos para decisões melhores</span>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
          Reduza prejuízos com
          <br />
          <span className="text-emerald-400">Banco Central + birôs + IA</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          O que você precisa ver, em segundos — pelo menor custo por consulta.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 rounded-2xl transition-all duration-300 text-lg ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-xl hover:shadow-2xl'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <tab.icon className="w-6 h-6 mr-3" />
            {tab.label}
          </Button>
        ))}
      </div>

      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        <CardContent className="p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${currentTab?.bgColor} flex items-center justify-center`}>
                  {currentTab && <currentTab.icon className={`w-8 h-8 ${currentTab.color}`} />}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900">{currentContent.title}</h3>
                  <p className="text-xl text-gray-600 mt-2">{currentContent.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="space-y-4">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg">
                Saiba mais
                <ArrowRight className="w-5 h-5 ml-2" />
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
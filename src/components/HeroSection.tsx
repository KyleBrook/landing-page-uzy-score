import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Brain, Database, Shield, ArrowDown, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface HeroSectionProps {
  onSearch: (cpf: string) => void;
  cpf: string;
  setCpf: (cpf: string) => void;
}

const HeroSection = ({ onSearch, cpf, setCpf }: HeroSectionProps) => {
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleSearch = () => {
    if (cpf.length >= 11) {
      onSearch(cpf);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Principal */}
      <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
        <div className="mb-16 max-w-5xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Análise de crédito em tempo real</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Análise de crédito com
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Transforme sua gestão de crédito com análises precisas em segundos. 
            Mais de 400 fontes de dados integradas para decisões inteligentes.
          </p>

          {/* Features em destaque */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-medium">Análise em 5 segundos</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-medium">+400 fontes de dados</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <span className="font-medium">98% de precisão</span>
            </div>
          </div>
        </div>
        
        {/* Card de consulta */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-lg w-full mb-12">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consulte agora</h3>
                <p className="text-gray-600">Digite o CPF ou CNPJ para análise completa</p>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="000.000.000-00 ou 00.000.000/0001-00"
                  value={formatCPF(cpf)}
                  onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 14))}
                  className="h-14 text-center text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  maxLength={18}
                />
              </div>
              
              <Button
                onClick={handleSearch}
                disabled={cpf.length < 11}
                className="w-full h-14 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Analisar Perfil de Crédito
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Consulta segura e protegida</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indicadores de confiança */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>LGPD Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Dados Criptografados</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Certificação ISO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
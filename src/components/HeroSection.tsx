import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Brain, Database, Shield, CheckCircle, DollarSign } from 'lucide-react';
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

  return (
    <div className="relative">
      {/* Hero em grid com mascote */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[85vh] px-4">
        <div>
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Diminuir prejuízos é a nossa missão</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Pare de perder dinheiro
            <br />
            com crédito mal concedido.
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mb-10 leading-relaxed font-light">
            Decida com segurança usando dados profundos do Banco Central e dos principais birôs de crédito,
            cruzados por IA — com o menor custo do mercado.
          </p>

          {/* Features em destaque */}
          <div className="flex flex-wrap items-center gap-8 mb-10">
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
              <span className="font-medium">Banco Central + birôs</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <span className="font-medium">IA prioriza o que importa</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-medium">Menor custo por consulta</span>
            </div>
          </div>

          {/* Card de consulta */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-lg w-full mb-8">
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
                  <span>Decisão segura, dados criptografados</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicadores de confiança */}
          <div className="flex flex-wrap items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>SCR do Banco Central</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Principais birôs do mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>LGPD Compliance</span>
            </div>
          </div>
        </div>

        {/* Coluna do mascote */}
        <div className="hidden lg:block">
          <img
            src="/branding/mascot.png"
            alt="Mascote Uzy Score"
            className="w-full max-w-md mx-auto drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
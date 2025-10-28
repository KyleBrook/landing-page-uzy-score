import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Brain, Database, Shield, CheckCircle, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface HeroSectionProps {
  onSearch: (cpf: string) => void;
  cpf: string;
  setCpf: (cpf: string) => void;
}

const WHATSAPP_URL = "https://w.app/promolp";

const HeroSection = ({ onSearch, cpf, setCpf }: HeroSectionProps) => {
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[75vh] px-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Diminuir prejuízos é a nossa missão</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pare de perder dinheiro
            <br />
            com crédito mal concedido.
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
            Decida com segurança usando dados profundos do Banco Central e dos principais birôs de crédito,
            cruzados por IA — com o menor custo do mercado.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <span className="font-medium">Análise em 5 segundos</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Database className="w-5 h-5 text-purple-300" />
              </div>
              <span className="font-medium">Banco Central + birôs</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-300" />
              </div>
              <span className="font-medium">IA prioriza o que importa</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-300" />
              </div>
              <span className="font-medium">Menor custo por consulta</span>
            </div>
          </div>

          <Card className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 shadow-lg max-w-lg w-full mb-6">
            <div className="p-6">
              <div className="space-y-5">
                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Consulte agora</h3>
                  <p className="text-white/60">Digite o CPF ou CNPJ para análise completa</p>
                </div>
                
                <div>
                  <Input
                    type="text"
                    placeholder="000.000.000-00 ou 00.000.000/0001-00"
                    value={formatCPF(cpf)}
                    onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 14))}
                    className="h-12 text-center text-base bg-neutral-950 border-neutral-800 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500"
                    maxLength={18}
                  />
                </div>
                
                <Button
                  className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <Search className="w-5 h-5 mr-2" />
                    Analisar Perfil de Crédito
                  </a>
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Decisão segura, dados criptografados</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>SCR do Banco Central</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Principais birôs do mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>LGPD Compliance</span>
            </div>
          </div>
        </div>

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
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, Brain, Database, Shield, ArrowDown } from 'lucide-react';
import GlassCard from './GlassCard';

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
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="mb-12 max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-blue-500/20 border border-emerald-400/30">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-emerald-400/20 border border-purple-400/30">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-emerald-400">Big Data</span> e{' '}
            <span className="text-blue-400">Inteligência Artificial</span>
            <br />
            para sua gestão de crédito
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Através da consulta de CPF ou CNPJ, tenha acesso organizado a todos os dados 
            necessários para realizar análise de crédito completa com mais agilidade e monitorar sua carteira
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-emerald-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Análise em segundos</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2 text-blue-400">
              <Database className="w-5 h-5" />
              <span className="text-sm font-medium">+400 fontes de dados</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2 text-purple-400">
              <Brain className="w-5 h-5" />
              <span className="text-sm font-medium">IA especializada</span>
            </div>
          </div>
        </div>
        
        <GlassCard className="p-8 max-w-lg w-full mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3 text-left">
                Digite o CPF ou CNPJ para análise
              </label>
              <Input
                type="text"
                placeholder="000.000.000-00 ou 00.000.000/0001-00"
                value={formatCPF(cpf)}
                onChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0, 14))}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-center text-lg h-12"
                maxLength={18}
              />
            </div>
            
            <Button
              onClick={handleSearch}
              disabled={cpf.length < 11}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-4 rounded-xl text-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Analisar Perfil de Crédito
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Shield className="w-4 h-4" />
              <span>Consulta segura e protegida por criptografia</span>
            </div>
          </div>
        </GlassCard>

        <Button
          variant="ghost"
          onClick={() => scrollToSection('benefits')}
          className="text-white/60 hover:text-white hover:bg-white/10 group"
        >
          <span>Descubra os benefícios</span>
          <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
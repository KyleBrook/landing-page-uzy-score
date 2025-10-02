import { Building, Users, FileText, Scale, Globe, DollarSign, Shield, TrendingUp, Database, Briefcase, CreditCard, AlertTriangle } from 'lucide-react';
import GlassCard from './GlassCard';

const DataSourcesSection = () => {
  const dataSources = [
    { icon: Building, label: 'Dados da Empresa', color: 'text-emerald-400' },
    { icon: Users, label: 'Participações', color: 'text-blue-400' },
    { icon: FileText, label: 'QSA - Quadro Societário', color: 'text-purple-400' },
    { icon: CreditCard, label: 'Integração com bureaus de crédito', color: 'text-orange-400' },
    { icon: DollarSign, label: 'Dados econômicos financeiros', color: 'text-cyan-400' },
    { icon: Database, label: 'BNDES', color: 'text-green-400' },
    { icon: AlertTriangle, label: 'Recuperação judicial e falências', color: 'text-red-400' },
    { icon: Shield, label: 'Procon', color: 'text-yellow-400' },
    { icon: Scale, label: 'Fiscal - Tributária - CND', color: 'text-indigo-400' },
    { icon: Globe, label: 'Sanções Nacionais e Internacionais', color: 'text-pink-400' },
    { icon: FileText, label: 'Relação de cartórios - Protesto', color: 'text-teal-400' },
    { icon: Briefcase, label: 'Trabalho escravo', color: 'text-rose-400' }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          <span className="text-emerald-400">Big Data</span> e{' '}
          <span className="text-blue-400">inteligência artificial</span>
          <br />
          para sua gestão de crédito
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Através da consulta de CNPJ ou nome de empresa, é possível ter de forma organizada todos os dados 
          necessários para realizar a sua análise de crédito completa com mais agilidade e monitorar sua carteira!
        </p>
      </div>

      <GlassCard className="p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 via-blue-500/20 to-purple-500/20"></div>
        </div>
        
        <div className="relative z-10">
          {/* Central hub */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-48 h-48 bg-gradient-to-br from-emerald-400/30 to-blue-500/30 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
              <div className="text-center">
                <Database className="w-12 h-12 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">+400</div>
                <div className="text-white/80 text-sm">fontes</div>
              </div>
            </div>
          </div>

          {/* Data sources grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <source.icon className={`w-6 h-6 ${source.color}`} />
                </div>
                <span className="text-white/90 text-sm font-medium leading-tight">
                  {source.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-white">
              Acesse essas e <span className="text-emerald-400">mais de 400 fontes</span> de dados.
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default DataSourcesSection;
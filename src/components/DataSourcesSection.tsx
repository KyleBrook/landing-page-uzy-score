import { Building, Users, FileText, Scale, Globe, DollarSign, Shield, TrendingUp, Database, Briefcase, CreditCard, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DataSourcesSection = () => {
  const dataSources = [
    { icon: Building, label: 'Dados da Empresa', color: 'text-emerald-600' },
    { icon: Users, label: 'Participações', color: 'text-blue-600' },
    { icon: FileText, label: 'QSA - Quadro Societário', color: 'text-purple-600' },
    { icon: CreditCard, label: 'Integração com bureaus de crédito', color: 'text-orange-600' },
    { icon: DollarSign, label: 'Dados econômicos financeiros', color: 'text-cyan-600' },
    { icon: Database, label: 'BNDES', color: 'text-green-600' },
    { icon: AlertTriangle, label: 'Recuperação judicial e falências', color: 'text-red-600' },
    { icon: Shield, label: 'Procon', color: 'text-yellow-600' },
    { icon: Scale, label: 'Fiscal - Tributária - CND', color: 'text-indigo-600' },
    { icon: Globe, label: 'Sanções Nacionais e Internacionais', color: 'text-pink-600' },
    { icon: FileText, label: 'Relação de cartórios - Protesto', color: 'text-teal-600' },
    { icon: Briefcase, label: 'Trabalho escravo', color: 'text-rose-600' }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          <span className="text-emerald-600">Big Data</span> e{' '}
          <span className="text-blue-600">inteligência artificial</span>
          <br />
          para sua gestão de crédito
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Através da consulta de CNPJ ou nome de empresa, é possível ter de forma organizada todos os dados 
          necessários para realizar a sua análise de crédito completa com mais agilidade e monitorar sua carteira!
        </p>
      </div>

      <Card className="border-0 shadow-lg relative overflow-hidden">
        <CardContent className="p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-emerald-600/20 via-blue-600/20 to-purple-600/20"></div>
          </div>
          
          <div className="relative z-10">
            {/* Central hub */}
            <div className="flex items-center justify-center mb-12">
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center border-2 border-emerald-200">
                <div className="text-center">
                  <Database className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">+400</div>
                  <div className="text-gray-600 text-sm">fontes</div>
                </div>
              </div>
            </div>

            {/* Data sources grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                    <source.icon className={`w-6 h-6 ${source.color}`} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-tight">
                    {source.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-gray-900">
                Acesse essas e <span className="text-emerald-600">mais de 400 fontes</span> de dados.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DataSourcesSection;
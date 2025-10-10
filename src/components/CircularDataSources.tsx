import { Building, Users, FileText, Scale, Globe, DollarSign, Shield, Database, Briefcase, CreditCard, AlertTriangle, Eye } from 'lucide-react';

const CircularDataSources = () => {
  const dataSources = [
    { icon: Building, label: 'Dados da Empresa', angle: 0, color: 'bg-emerald-500' },
    { icon: Users, label: 'Participações', angle: 30, color: 'bg-blue-500' },
    { icon: FileText, label: 'QSA - Quadro Societário', angle: 60, color: 'bg-purple-500' },
    { icon: CreditCard, label: 'Integração com bureaus de crédito', angle: 90, color: 'bg-orange-500' },
    { icon: DollarSign, label: 'Dados econômicos financeiros', angle: 120, color: 'bg-cyan-500' },
    { icon: Database, label: 'BNDES', angle: 150, color: 'bg-green-500' },
    { icon: AlertTriangle, label: 'Recuperação judicial e falências', angle: 180, color: 'bg-red-500' },
    { icon: Shield, label: 'Procon', angle: 210, color: 'bg-yellow-500' },
    { icon: Scale, label: 'Fiscal - Tributária - CND', angle: 240, color: 'bg-indigo-500' },
    { icon: Globe, label: 'Sanções Nacionais e Internacionais', angle: 270, color: 'bg-pink-500' },
    { icon: FileText, label: 'Relação de cartórios - Protesto', angle: 300, color: 'bg-teal-500' },
    { icon: Briefcase, label: 'Trabalho escravo', angle: 330, color: 'bg-rose-500' }
  ];

  const radius = 200;
  const centerX = 250;
  const centerY = 250;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circularGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circularGrid)" className="text-emerald-300" />
        </svg>
      </div>

      <svg width="500" height="500" className="relative z-10">
        {/* Círculos concêntricos */}
        <circle cx={centerX} cy={centerY} r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-300 opacity-30" />
        <circle cx={centerX} cy={centerY} r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-300 opacity-20" />
        <circle cx={centerX} cy={centerY} r="160" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-300 opacity-10" />

        {/* Linhas conectoras */}
        {dataSources.map((source, index) => {
          const x = centerX + Math.cos((source.angle - 90) * Math.PI / 180) * radius;
          const y = centerY + Math.sin((source.angle - 90) * Math.PI / 180) * radius;
          
          return (
            <line
              key={`line-${index}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-emerald-300 opacity-20"
            />
          );
        })}

        {/* Centro da plataforma */}
        <circle cx={centerX} cy={centerY} r="60" className="fill-emerald-500 opacity-90" />
        <text x={centerX} y={centerY - 10} textAnchor="middle" className="fill-white text-lg font-bold">
          Plataforma
        </text>
        <text x={centerX} y={centerY + 10} textAnchor="middle" className="fill-white text-lg font-bold">
          Uzy Score
        </text>
      </svg>

      {/* Elementos das fontes de dados */}
      {dataSources.map((source, index) => {
        const x = centerX + Math.cos((source.angle - 90) * Math.PI / 180) * radius;
        const y = centerY + Math.sin((source.angle - 90) * Math.PI / 180) * radius;
        
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            <div className="flex items-center gap-3 group">
              <div className={`w-12 h-12 ${source.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <source.icon className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-800">{source.label}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Texto inferior */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-lg font-medium">
          Acesse essas e <span className="text-emerald-400 font-bold">mais de 400 fontes</span> de dados.
        </p>
      </div>
    </div>
  );
};

export default CircularDataSources;
import { Building, Users, FileText, Scale, Globe, DollarSign, Shield, Database, Briefcase, CreditCard, AlertTriangle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CircularDataSources = () => {
  const isMobile = useIsMobile();
  const size = isMobile ? 360 : 500;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 60;

  const ringRadii = [size * 0.16, size * 0.24, size * 0.32];

  const dataSources = [
    { icon: Building, label: 'Dados da Empresa', angle: 0 },
    { icon: Users, label: 'Participações', angle: 30 },
    { icon: FileText, label: 'QSA - Quadro Societário', angle: 60 },
    { icon: CreditCard, label: 'Integração com bureaus de crédito', angle: 90 },
    { icon: DollarSign, label: 'Dados econômicos financeiros', angle: 120 },
    { icon: Database, label: 'BNDES', angle: 150 },
    { icon: AlertTriangle, label: 'Recuperação judicial e falências', angle: 180 },
    { icon: Shield, label: 'Procon', angle: 210 },
    { icon: Scale, label: 'Fiscal - Tributária - CND', angle: 240 },
    { icon: Globe, label: 'Sanções Nacionais e Internacionais', angle: 270 },
    { icon: FileText, label: 'Relação de cartórios - Protesto', angle: 300 },
    { icon: Briefcase, label: 'Trabalho escravo', angle: 330 }
  ].sort((a, b) => a.angle - b.angle);

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center bg-neutral-950 rounded-3xl overflow-hidden py-8">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circularGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circularGrid)" className="text-purple-300" />
        </svg>
      </div>

      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="relative z-10">
          {/* Círculos concêntricos */}
          {ringRadii.map((r, i) => (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-purple-300 opacity-20"
            />
          ))}

          {/* Centro da plataforma */}
          <circle cx={centerX} cy={centerY} r={size * 0.12} className="fill-purple-700 opacity-90" />
          <text x={centerX} y={centerY - 10} textAnchor="middle" className="fill-white text-lg font-bold">
            Plataforma
          </text>
          <text x={centerX} y={centerY + 12} textAnchor="middle" className="fill-white text-lg font-bold">
            Uzy Score
          </text>
        </svg>

        {/* Ícones */}
        {dataSources.map((source, index) => {
          const rad = ((source.angle - 90) * Math.PI) / 180;
          const x = centerX + Math.cos(rad) * radius;
          const y = centerY + Math.sin(rad) * radius;

          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
            >
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <source.icon className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-800">{source.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Texto inferior */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <p className="text-white text-lg font-medium">
          Acesse essas e <span className="text-purple-300 font-bold">mais de 400 fontes</span> de dados.
        </p>
      </div>
    </div>
  );
};

export default CircularDataSources;
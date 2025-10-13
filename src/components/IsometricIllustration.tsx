import { Brain, Database, Eye } from 'lucide-react';

const IsometricIllustration = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-purple-300" />
        </svg>
      </div>

      {/* Elementos de fundo simplificados */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-purple-100 rounded-lg transform rotate-12 opacity-60"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-purple-100 rounded-lg transform -rotate-12 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-purple-200 rounded-full opacity-60"></div>
        
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 100 Q 200 150 300 100" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-300 opacity-30" />
          <path d="M 400 200 Q 300 250 200 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-300 opacity-30" />
        </svg>
      </div>

      {/* Laptop central */}
      <div className="relative z-10">
        <div className="relative">
          {/* Base do laptop */}
          <div className="w-80 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-2xl transform perspective-1000 rotateX-10 rotateY-5">
            {/* Tela */}
            <div className="absolute -top-32 left-4 w-72 h-44 bg-gradient-to-br from-purple-700 to-purple-800 rounded-lg shadow-xl">
              <div className="p-4 h-full flex flex-col justify-center items-center text-white">
                <Brain className="w-12 h-12 mb-2" />
                <div className="text-sm font-medium">Uzy Score IA</div>
                <div className="text-xs opacity-80">Análise em tempo real</div>
              </div>
            </div>
            
            {/* Teclado */}
            <div className="absolute top-4 left-8 right-8 bottom-8 bg-gray-800 rounded opacity-80">
              <div className="grid grid-cols-12 gap-1 p-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-600 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges flutuantes */}
          <div className="absolute -top-20 -left-20">
            <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Monitoramento</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-16 -right-24">
            <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Big Data</span>
              </div>
            </div>
          </div>

          <div className="absolute top-8 -left-28">
            <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">IA</span>
              </div>
            </div>
          </div>

          <div className="absolute top-12 -right-32">
            <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Motor de Crédito</span>
              </div>
            </div>
          </div>

          {/* Elementos adicionais em roxo */}
          <div className="absolute -bottom-8 -left-16 w-16 h-16 bg-purple-600 rounded-lg shadow-lg transform rotate-12">
            <div className="w-full h-full flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="absolute -bottom-6 -right-20 w-14 h-14 bg-purple-600 rounded-lg shadow-lg transform -rotate-12">
            <div className="w-full h-full flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsometricIllustration;
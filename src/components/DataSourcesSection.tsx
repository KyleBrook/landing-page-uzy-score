import CircularDataSources from './CircularDataSources';

const DataSourcesSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-purple-300">Big Data</span> e{' '}
          <span className="text-white">inteligência artificial</span>
          <br />
          para sua gestão de crédito
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Através da consulta de CNPJ ou nome de empresa, é possível ter de forma organizada todos os dados 
          necessários para realizar a sua análise de crédito completa com mais agilidade e monitorar sua carteira!
        </p>
      </div>

      <div className="mb-12">
        <CircularDataSources />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="text-center p-8 bg-neutral-900 rounded-2xl shadow-lg border border-neutral-800">
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-purple-300">+400</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Fontes de Dados</h3>
          <p className="text-white/70">Integração com as principais bases de dados do país</p>
        </div>

        <div className="text-center p-8 bg-neutral-900 rounded-2xl shadow-lg border border-neutral-800">
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-purple-300">98%</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Precisão</h3>
          <p className="text-white/70">Análises com alta precisão usando inteligência artificial</p>
        </div>

        <div className="text-center p-8 bg-neutral-900 rounded-2xl shadow-lg border border-neutral-800">
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-purple-300">5s</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Velocidade</h3>
          <p className="text-white/70">Análises completas em apenas 5 segundos</p>
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;
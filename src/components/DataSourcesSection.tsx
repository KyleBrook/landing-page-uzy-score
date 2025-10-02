import CircularDataSources from './CircularDataSources';

const DataSourcesSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          <span className="text-emerald-600">Big Data</span> e{' '}
          <span className="text-blue-600">inteligência artificial</span>
          <br />
          para sua gestão de crédito
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Através da consulta de CNPJ ou nome de empresa, é possível ter de forma organizada todos os dados 
          necessários para realizar a sua análise de crédito completa com mais agilidade e monitorar sua carteira!
        </p>
      </div>

      <div className="mb-16">
        <CircularDataSources />
      </div>

      {/* Seção adicional com estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-emerald-600">+400</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Fontes de Dados</h3>
          <p className="text-gray-600">Integração com as principais bases de dados do país</p>
        </div>

        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-blue-600">98%</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Precisão</h3>
          <p className="text-gray-600">Análises com alta precisão usando inteligência artificial</p>
        </div>

        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-purple-600">5s</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Velocidade</h3>
          <p className="text-gray-600">Análises completas em apenas 5 segundos</p>
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;
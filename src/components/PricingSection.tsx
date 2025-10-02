import { Check, Star, Zap, Building, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const PricingSection = () => {
  const subscriptionPlans = [
    {
      name: 'Starter',
      consultations: 10,
      price: 115,
      pricePerConsultation: 11.5,
      popular: false
    },
    {
      name: 'Popular',
      consultations: 20,
      price: 189,
      pricePerConsultation: 9.45,
      popular: true
    },
    {
      name: 'Professional',
      consultations: 30,
      price: 229,
      pricePerConsultation: 7.63,
      popular: false
    }
  ];

  const payPerUsePlans = [
    {
      name: 'Consulta Avulsa',
      consultations: 1,
      price: 25.90,
      pricePerConsultation: 25.90
    },
    {
      name: 'Pacote Básico',
      consultations: 5,
      price: 119,
      pricePerConsultation: 23.8
    },
    {
      name: 'Pacote Intermediário',
      consultations: 10,
      price: 189.90,
      pricePerConsultation: 18.90
    },
    {
      name: 'Pacote Avançado',
      consultations: 20,
      price: 250,
      pricePerConsultation: 12.5
    },
    {
      name: 'Pacote Empresarial',
      consultations: 50,
      price: 450,
      pricePerConsultation: 9
    }
  ];

  const pfFeatures = [
    'Score SCR completo',
    'Classificação de risco detalhada',
    'Análise de inadimplência',
    'Composição da carteira de crédito',
    'Análise inteligente com IA',
    'Resumo detalhado personalizado'
  ];

  const pjFeatures = [
    'Dados empresariais completos',
    'Perfil financeiro detalhado',
    'Score de crédito empresarial',
    'Indicadores de negócio',
    'Quadro de funcionários',
    'Análise completa por IA',
    'Avaliação de risco empresarial'
  ];

  return (
    <div className="space-y-12 py-20">
      {/* Seção de Assinaturas */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Planos de <span className="text-emerald-600">Assinatura</span>
          </h2>
          <p className="text-gray-600 mb-2">Pagamento apenas por cartão de crédito</p>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            Consultas Ilimitadas por Mês
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg ${plan.popular ? 'ring-2 ring-emerald-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-emerald-600">R$ {plan.price}</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {plan.consultations} consultas • R$ {plan.pricePerConsultation.toFixed(2)} por consulta
                  </p>
                </div>

                <Button className={`w-full mb-4 ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Seção Pay-per-Use */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Consultas <span className="text-blue-600">Avulsas</span>
          </h2>
          <p className="text-gray-600">Pague apenas pelo que usar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {payPerUsePlans.map((plan, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-blue-600">R$ {plan.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    {plan.consultations} consulta{plan.consultations > 1 ? 's' : ''} • R$ {plan.pricePerConsultation.toFixed(2)} cada
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recursos PF e PJ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-100">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pessoa Física (PF)</h3>
            </div>
            
            <div className="space-y-3">
              {pfFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pessoa Jurídica (PJ)</h3>
            </div>
            
            <div className="space-y-3">
              {pjFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Em Breve */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-bold text-gray-900">Em Breve</h3>
          </div>
          <p className="text-gray-600">
            <strong className="text-yellow-600">Negativação de CPF e CNPJ no Serasa</strong>
            <br />
            Proteja-se contra fraudes com nosso sistema de negativação integrado
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingSection;
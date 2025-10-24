import { Check, Crown, Gift, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type SubscriptionPlan = {
  name: string;
  price: number;
  premiumCount: number;
  starterCount: number;
  popular?: boolean;
};

type PayPerUsePlan = {
  name: string;
  price: number;
  premiumCount: number;
  starterCount: number;
  highlight?: boolean;
};

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Simple',
    price: 119,
    premiumCount: 7,
    starterCount: 10,
  },
  {
    name: 'Standard',
    price: 189,
    premiumCount: 12,
    starterCount: 18,
    popular: true,
  },
  {
    name: 'PRO',
    price: 269,
    premiumCount: 20,
    starterCount: 30,
  },
];

const payPerUsePlans: PayPerUsePlan[] = [
  {
    name: 'Basic',
    price: 50,
    premiumCount: 2,
    starterCount: 4,
  },
  {
    name: 'Basic Full',
    price: 119,
    premiumCount: 5,
    starterCount: 10,
  },
  {
    name: 'Intermediário',
    price: 189,
    premiumCount: 10,
    starterCount: 16,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 499,
    premiumCount: 35,
    starterCount: 50,
  },
];

const sharedPerks = [
  'Renovação automática',
  'Cancele quando quiser',
  'Suporte prioritário',
];

const avulsoPerks = ['Sem vencimento', 'Use como quiser'];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);

const PricingSection = () => {
  return (
    <div className="space-y-12 py-20">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Planos de Assinatura
        </div>
        <h2 className="text-3xl font-bold text-white">
          Créditos mensais recorrentes. Use como quiser a cada mês.
        </h2>
        <p className="text-white/70">
          Monte seu mix entre consultas Premium e Starter conforme a necessidade do seu time.
        </p>
      </div>

      <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_55%)]" />
        <CardContent className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 shrink-0">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <Badge className="mb-3 bg-white/15 text-white border-white/20 animate-pulse">
                Promoção válida até 31/10
              </Badge>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                Cadastre-se esta semana e ganhe cupons de 10, 20 ou 30 consultas gratuitas.
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl">
                Oferta exclusiva para novos cadastros realizados até 31 de outubro. Aproveite o bônus para testar o máximo de consultas sem custo adicional.
              </p>
            </div>
          </div>
          <Button className="bg-white text-purple-600 hover:bg-white/90 shadow-md h-12 px-6">
            Quero aproveitar agora
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border-0 shadow-lg bg-neutral-900 ${
              plan.popular ? 'ring-2 ring-purple-500' : 'border border-neutral-800'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-purple-500 text-white flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Mais Popular
                </Badge>
              </div>
            )}
            <CardContent className="p-6 space-y-5">
              <div className="space-y-2 text-center">
                <p className="text-sm text-white/60">Plano Assinatura {formatCurrency(plan.price)}</p>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div>
                  <span className="text-3xl font-bold text-purple-400">
                    {formatCurrency(plan.price)}
                  </span>
                  <span className="text-white/60"> / mês</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <Crown className="w-4 h-4 text-purple-300 mt-0.5" />
                  <span>
                    Até <strong>{plan.premiumCount} consultas Premium</strong>
                    <span className="block text-white/60 text-xs">
                      Se usar todo o saldo em Premium
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-300 mt-0.5" />
                  <span>
                    Ou <strong>{plan.starterCount} consultas Starter</strong>
                    <span className="block text-white/60 text-xs">
                      Se usar todo o saldo em Starter
                    </span>
                  </span>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3 text-white/80">
                  Use como quiser! Misture Premium e Starter até acabar o saldo mensal.
                </div>
              </div>

              <ul className="space-y-2 text-sm text-white/70">
                {sharedPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-300" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                Escolher plano {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-200 text-sm font-medium">
          Consultas Avulsas
        </div>
        <h2 className="text-3xl font-bold text-white">
          Compre créditos sem compromisso. Validade até usar todo o saldo.
        </h2>
        <p className="text-white/70">
          Escolha o pacote ideal para fluxos pontuais ou reforço extra de consultas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {payPerUsePlans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border-0 shadow-md bg-neutral-900 ${
              plan.highlight ? 'ring-2 ring-emerald-500' : 'border border-neutral-800'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-emerald-500 text-white">Melhor Custo</Badge>
              </div>
            )}
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2 text-center">
                <p className="text-sm text-white/60">{plan.name}</p>
                <h4 className="text-2xl font-bold text-emerald-400">
                  {formatCurrency(plan.price)}
                </h4>
              </div>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <Crown className="w-4 h-4 text-emerald-300 mt-0.5" />
                  <span>
                    Até <strong>{plan.premiumCount} Premium</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-emerald-300 mt-0.5" />
                  <span>
                    Ou <strong>{plan.starterCount} Starter</strong>
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-white/70">
                {avulsoPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-300" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full border-white/10 text-white hover:bg-white/10 hover:text-white"
              >
                Comprar {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
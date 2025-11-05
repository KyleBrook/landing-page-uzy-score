import { ArrowRight, Check, Gift, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FREE_TRIAL_URL = "https://uzyscore.com.br/auth/register";
const WHATSAPP_URL = "https://wa.me/556136867068";

const highlights = [
  "Primeiras consultas por nossa conta",
  "Relatório completo com dados oficiais do Bacen",
  "IA priorizando os riscos realmente relevantes",
];

const benefits = [
  "Configuração rápida: consulte em poucos minutos",
  "Sem custo fixo para começar — teste sem compromisso",
  "Equipe disponível no WhatsApp para acompanhar você",
];

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="text-center space-y-4">
          <Badge className="mx-auto flex w-fit items-center gap-2 bg-purple-500/15 text-purple-100">
            <Sparkles className="h-4 w-4" />
            Teste gratuito liberado
          </Badge>
          <h2 className="text-4xl font-bold text-white leading-tight">
            Teste o Uzy Score sem pagar nada
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Cadastre-se, rode suas primeiras consultas gratuitamente e veja o relatório mais completo do Brasil em ação. O investimento só começa quando você decidir continuar.
          </p>
        </div>

        <Card className="border border-purple-500/40 bg-purple-500/10">
          <CardContent className="flex flex-col items-center gap-6 px-6 py-8 text-center">
            <div className="flex items-center gap-3 text-purple-200">
              <Gift className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Oferta de lançamento
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Primeiras consultas 100% gratuitas
              </h3>
              <p className="text-white/70">
                Ative o cupom e receba duas consultas para testar toda a plataforma com dados reais.
              </p>
            </div>
            <Badge className="bg-emerald-500/15 text-emerald-100 border border-emerald-400/40 px-4 py-2 text-sm font-semibold">
              Use o cupom: <span className="ml-2 text-emerald-200">UZY2</span>
            </Badge>
            <div className="flex flex-col gap-3 text-left text-white/80 sm:flex-row sm:text-center">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                >
                  <Check className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit} className="border border-white/10 bg-white/5">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200">
                  <Shield className="h-5 w-5" />
                </span>
                <p className="text-sm text-white/80">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white"
          >
            <a href={FREE_TRIAL_URL} target="_blank" rel="noreferrer">
              Criar minha conta grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
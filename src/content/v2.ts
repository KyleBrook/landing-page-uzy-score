export type V2Content = {
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentLight: string;
  };
  nav: {
    items: { label: string; href: string }[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    highlights: string[];
  };
  steps: { pretitle?: string; title: string; desc: string }[];
  features: { title: string; desc: string }[];
  testimonials: { name: string; quote: string }[];
  finalCta: {
    pretitle?: string;
    title: string;
    subtitle: string;
    buttons: { label: string; href: string; variant?: "primary" | "outline" }[];
  };
  footer: {
    legalText: string;
    contactHref: string;
  };
  floatingContactHref: string;
};

const content: V2Content = {
  colors: {
    primary: "#6D28D9",
    primaryHover: "#5B21B6",
    accent: "#A78BFA",
    accentLight: "#C4B5FD",
  },
  nav: {
    items: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    ctaLabel: "Falar com especialista",
    ctaHref: "#contato",
  },
  hero: {
    badge: "Dados profundos + IA • Menor custo por consulta",
    title: "Diminua prejuízos com decisões de crédito mais inteligentes.",
    subtitle:
      "Banco Central + birôs de crédito analisados por IA, para aprovar com segurança e pagar menos por consulta.",
    primaryCta: { label: "Falar no WhatsApp", href: "https://wa.me/" },
    secondaryCta: { label: "Ver como funciona", href: "#como-funciona" },
    highlights: ["SCR do Banco Central", "Integração com birôs líderes", "LGPD e criptografia"],
  },
  steps: [
    {
      pretitle: "1. Consulta",
      title: "BC + Birôs",
      desc: "Buscamos as fontes mais relevantes (SCR do Banco Central e birôs) em segundos.",
    },
    {
      pretitle: "2. Análise",
      title: "IA prioriza o que importa",
      desc: "Sinais de risco organizados e ponderados para reduzir falsos positivos.",
    },
    {
      pretitle: "3. Decisão",
      title: "Aprove com segurança",
      desc: "Recomendação clara, auditoria e histórico — com o menor custo por consulta.",
    },
  ],
  features: [
    { title: "Risco reduzido", desc: "Regra clara, auditoria e visão única para decisões de crédito confiáveis." },
    { title: "Dados que importam", desc: "SCR do Banco Central + birôs integrados em um só lugar." },
    { title: "IA que prioriza", desc: "Foco nos sinais relevantes e menos falsos positivos." },
    { title: "Velocidade", desc: "Análises completas em segundos, sem fricção." },
    { title: "Acurácia", desc: "Preditivo com mais de 400 fontes ponderadas." },
    { title: "Controle", desc: "Relatórios, histórico e monitoramento contínuo." },
  ],
  testimonials: [
    {
      name: "Marina, Gestora de Risco",
      quote:
        "Passamos a negar os casos certos e aprovar com confiança. O custo por consulta caiu e o prejuízo também.",
    },
    {
      name: "Rafael, Diretor Financeiro",
      quote:
        "A visão consolidada do BC + birôs com IA fez diferença. Processo mais rápido e assertivo.",
    },
    {
      name: "Lucas, Crédito PJ",
      quote:
        "Monitoramento contínuo e alertas de risco ajudam a agir antes do problema acontecer.",
    },
  ],
  finalCta: {
    pretitle: "Pronto para reduzir prejuízos?",
    title: "Fale com um especialista e veja como funciona.",
    subtitle: "Integração simples, resultado rápido e preço justo.",
    buttons: [
      { label: "Falar no WhatsApp", href: "https://wa.me/", variant: "primary" },
      { label: "Ver como funciona", href: "#como-funciona", variant: "outline" },
    ],
  },
  footer: {
    legalText: `© ${new Date().getFullYear()} Uzy Score — Todos os direitos reservados.`,
    contactHref: "#contato",
  },
  floatingContactHref: "https://wa.me/",
};

export default content;
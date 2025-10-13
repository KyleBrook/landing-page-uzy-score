import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  highlights: string[];
};

const HeroV2 = ({ badge, title, subtitle, primaryCta, secondaryCta, highlights }: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/branding/bg-fundo.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#0b0b0f]/90" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-[var(--brand-accent)]" />
            <span className="text-xs md:text-sm text-white/80">
              {badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button className="h-12 px-6 text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)]" asChild>
              <a href={primaryCta.href} target="_blank" rel="noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                {primaryCta.label}
              </a>
            </Button>
            <Button variant="outline" className="h-12 px-6 border-white/20 text-white hover:bg-white/10" asChild>
              <a href={secondaryCta.href}>
                {secondaryCta.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/60">
            {highlights.map((h, i) => (
              <div key={i} className="text-sm">{h}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
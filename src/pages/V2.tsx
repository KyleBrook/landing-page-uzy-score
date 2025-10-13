import { HeaderV2, HeroV2, FeatureGridV2, TestimonialsV2, FooterV2, FloatingContact } from "../components/v2";
import { Button } from "@/components/ui/button";
import content from "../content/v2";

const V2 = () => {
  return (
    <div
      className="min-h-screen bg-[#0b0b0f] text-white"
      style={
        {
          ["--brand-primary" as any]: content.colors.primary,
          ["--brand-primary-hover" as any]: content.colors.primaryHover,
          ["--brand-accent" as any]: content.colors.accent,
          ["--brand-accent-light" as any]: content.colors.accentLight,
        } as React.CSSProperties
      }
    >
      <HeaderV2
        navItems={content.nav.items}
        ctaLabel={content.nav.ctaLabel}
        ctaHref={content.nav.ctaHref}
      />
      <main>
        <HeroV2
          badge={content.hero.badge}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
          highlights={content.hero.highlights}
        />

        <section id="como-funciona" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {content.steps.map((s, i) => (
                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                  {s.pretitle && <div className="text-sm text-[var(--brand-accent-light)] mb-2">{s.pretitle}</div>}
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-white/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeatureGridV2
          heading="Reduza prejuízos e aprove com segurança"
          subheading="Big Data + IA com foco no que realmente muda sua decisão."
          items={content.features}
        />

        <TestimonialsV2
          heading="Quem usa, aprova"
          subheading="Resultados reais com menos custo e mais segurança."
          list={content.testimonials}
        />

        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                {content.finalCta.pretitle && (
                  <div className="text-sm text-[var(--brand-accent-light)] mb-2">{content.finalCta.pretitle}</div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {content.finalCta.title}
                </h3>
                <p className="text-white/70">
                  {content.finalCta.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {content.finalCta.buttons.map((b, i) =>
                  b.variant === "outline" ? (
                    <Button key={i} variant="outline" className="h-12 border-white/20 text-white hover:bg-white/10" asChild>
                      <a href={b.href}>{b.label}</a>
                    </Button>
                  ) : (
                    <Button key={i} asChild className="h-12 text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)]">
                      <a href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {b.label}
                      </a>
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterV2 legalText={content.footer.legalText} contactHref={content.footer.contactHref} />
      <FloatingContact href={content.floatingContactHref} />
    </div>
  );
};

export default V2;
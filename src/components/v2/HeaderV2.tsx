import { Button } from "@/components/ui/button";

type HeaderProps = {
  navItems: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
};

const HeaderV2 = ({ navItems, ctaLabel, ctaHref }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/branding/uzy-score-logo.png"
            alt="Uzy Score"
            className="h-7 w-auto"
          />
          <span className="sr-only">Uzy Score</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition">
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <Button
            asChild
            className="text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)]"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderV2;
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const HeaderCpf = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/branding/uzy-score-logo.png" alt="Uzy Score" className="h-7 w-auto" />
          <span className="sr-only">Uzy Score</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden h-10 px-5 text-sm text-white md:inline-flex">
          <a href="#contato">Falar com especialista</a>
        </Button>
      </div>
    </header>
  );
};

export default HeaderCpf;
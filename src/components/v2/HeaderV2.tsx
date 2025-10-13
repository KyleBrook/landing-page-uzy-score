import { Button } from "@/components/ui/button";

const HeaderV2 = () => {
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
          <a href="#como-funciona" className="hover:text-white transition">Como funciona</a>
          <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
          <a href="#depoimentos" className="hover:text-white transition">Depoimentos</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </nav>
        <div>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <a href="#contato">Falar com especialista</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderV2;
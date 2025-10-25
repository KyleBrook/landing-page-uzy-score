const FooterCpf = () => {
  return (
    <footer className="border-t border-white/10 bg-black/70 text-white/70">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row">
        <div className="flex items-center gap-3 text-white/80">
          <img src="/branding/uzy-score-logo.png" alt="Uzy Score" className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} Uzy Score</span>
        </div>
        <div className="flex gap-4">
          <a href="#beneficios" className="hover:text-white">
            Benefícios
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
          <a href="mailto:contato@uzy.com.br" className="hover:text-white">
            contato@uzy.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCpf;
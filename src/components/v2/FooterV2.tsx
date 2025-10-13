const FooterV2 = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/branding/uzy-score-logo.png" alt="Uzy Score" className="h-7 w-auto" />
          <span className="sr-only">Uzy Score</span>
        </div>
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Uzy Score — Todos os direitos reservados.
        </div>
        <div className="text-white/60 text-sm">
          <a href="#contato" className="hover:text-white">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
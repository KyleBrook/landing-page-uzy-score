import { Phone } from "lucide-react";

type Props = {
  href: string;
};

const FloatingContact = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 text-white px-4 py-3 rounded-full shadow-lg bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)]"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm font-medium hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
};

export default FloatingContact;
import { Phone } from "lucide-react";

const FloatingContact = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full shadow-lg"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm font-medium hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
};

export default FloatingContact;
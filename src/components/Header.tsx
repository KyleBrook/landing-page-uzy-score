import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GlassCard from './GlassCard';

const WHATSAPP_URL = "https://w.app/promolp";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 p-4">
      <GlassCard className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/branding/uzy-score-logo.png"
              alt="Uzy Score"
              className="h-8 w-auto"
            />
            <span className="sr-only">Uzy Score</span>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <Input
                placeholder="Buscar análises..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Bell className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <User className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </GlassCard>
    </header>
  );
};

export default Header;
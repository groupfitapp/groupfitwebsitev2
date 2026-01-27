import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white/80 hover:text-white hover:bg-white/10 gap-1.5 px-2"
      aria-label={i18n.language === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs font-medium uppercase">{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
    </Button>
  );
}

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useContent';

export const Footer = () => {
  const { settings } = useSiteSettings();

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {settings?.logo && (
                <img src={settings.logo} alt="Logo" className="h-8 w-8" />
              )}
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {settings?.site_name || 'Meu Site'}
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {settings?.description || 'Um site moderno gerenciado pelo Decap CMS'}
            </p>
            
            {/* Redes Sociais */}
            {settings?.social && (
              <div className="flex space-x-4">
                {Object.entries(settings.social).map(([platform, url]) => {
                  if (!url) return null;
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              {settings?.navigation?.map((item) => (
                <li key={item.url}>
                  <Link
                    to={item.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contato@meusite.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 {settings?.site_name || 'Meu Site'}. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Site gerenciado por{' '}
            <a
              href="https://decapcms.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Decap CMS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
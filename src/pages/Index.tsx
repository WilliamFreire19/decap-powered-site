import { useHomeContent } from '@/hooks/useContent';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner, ErrorState } from '@/components/LoadingStates';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const Index = () => {
  const { content, loading } = useHomeContent();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!content) {
    return <ErrorState message="Conteúdo da página inicial não encontrado" />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
                <p className="text-muted-foreground">Entregamos soluções de alta qualidade com tecnologias modernas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Otimizada</h3>
                <p className="text-muted-foreground">Sites rápidos e otimizados para a melhor experiência do usuário</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-muted-foreground">Equipe especializada sempre pronta para ajudar você</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {content.sections?.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">{section.title}</h2>
              <MarkdownRenderer content={section.content} className="text-center" />
              {section.image && (
                <div className="mt-8 text-center">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="rounded-lg shadow-soft mx-auto max-w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Index;

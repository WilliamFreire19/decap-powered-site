import React from 'react';

export const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Carregando conteúdo...</p>
    </div>
  </div>
);

export const ErrorState = ({ message = "Erro ao carregar conteúdo" }: { message?: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold mb-4 text-foreground">{message}</h1>
      <p className="text-muted-foreground mb-6">
        Verifique sua conexão com a internet ou tente novamente mais tarde.
      </p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        Tentar Novamente
      </button>
    </div>
  </div>
);
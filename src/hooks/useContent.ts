import { useState, useEffect } from 'react';

export interface HomeContent {
  title: string;
  subtitle: string;
  description: string;
  hero_image?: string;
  sections: Array<{
    title: string;
    content: string;
    image?: string;
  }>;
}

export interface AboutContent {
  title: string;
  content: string;
  image?: string;
  team: Array<{
    name: string;
    position: string;
    photo?: string;
    bio: string;
  }>;
}

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featured_image?: string;
  tags: string[];
  body: string;
  slug: string;
}

export interface SiteSettings {
  site_name: string;
  description: string;
  logo?: string;
  navigation: Array<{
    label: string;
    url: string;
  }>;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const useHomeContent = () => {
  const [content, setContent] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/pages/home.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading home content:', err);
        setLoading(false);
      });
  }, []);

  return { content, loading };
};

export const useAboutContent = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/pages/about.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading about content:', err);
        setLoading(false);
      });
  }, []);

  return { content, loading };
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/settings/site.json')
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading site settings:', err);
        setLoading(false);
      });
  }, []);

  return { settings, loading };
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would typically fetch from a blog API or static files
    // For now, we'll use mock data based on our content files
    const mockPosts: BlogPost[] = [
      {
        title: "Bem-vindos ao nosso blog!",
        date: "2024-01-15T10:00:00.000Z",
        author: "João Silva",
        excerpt: "Inauguramos nosso blog com muitas novidades e conteúdos sobre tecnologia, design e inovação.",
        tags: ["blog", "novidades", "tecnologia"],
        body: "# Bem-vindos ao nosso blog!\n\nEstamos muito animados em lançar nosso blog oficial!",
        slug: "2024-01-15-bem-vindos-ao-nosso-blog"
      },
      {
        title: "Tendências de Desenvolvimento Web para 2024",
        date: "2024-01-20T14:30:00.000Z",
        author: "Maria Santos",
        excerpt: "Descubra as principais tendências tecnológicas que vão dominar o desenvolvimento web em 2024.",
        tags: ["desenvolvimento", "tendências", "2024", "web"],
        body: "# Tendências de Desenvolvimento Web para 2024\n\nO mundo do desenvolvimento web está em constante evolução...",
        slug: "2024-01-20-tendencias-web-2024"
      }
    ];
    
    setPosts(mockPosts);
    setLoading(false);
  }, []);

  return { posts, loading };
};
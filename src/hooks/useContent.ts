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
    const loadContent = async () => {
      try {
        const response = await fetch('/content/pages/home.json');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          console.error('Failed to load home content');
        }
      } catch (err) {
        console.error('Error loading home content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading };
};

export const useAboutContent = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/content/pages/about.json');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          console.error('Failed to load about content');
        }
      } catch (err) {
        console.error('Error loading about content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading };
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('/content/settings/site.json');
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        } else {
          console.error('Failed to load site settings');
        }
      } catch (err) {
        console.error('Error loading site settings:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  return { settings, loading };
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Mock data for blog posts
        const mockPosts: BlogPost[] = [
          {
            title: "Bem-vindos ao nosso blog!",
            date: "2024-01-15T10:00:00.000Z",
            author: "João Silva",
            excerpt: "Inauguramos nosso blog com muitas novidades e conteúdos sobre tecnologia, design e inovação.",
            tags: ["blog", "novidades", "tecnologia"],
            body: "# Bem-vindos ao nosso blog!\n\nEstamos muito animados em lançar nosso blog oficial! Aqui você encontrará conteúdos exclusivos sobre tecnologia, design e inovação.",
            slug: "2024-01-15-bem-vindos-ao-nosso-blog"
          },
          {
            title: "Tendências de Desenvolvimento Web para 2024",
            date: "2024-01-20T14:30:00.000Z",
            author: "Maria Santos",
            excerpt: "Descubra as principais tendências tecnológicas que vão dominar o desenvolvimento web em 2024.",
            tags: ["desenvolvimento", "tendências", "2024", "web"],
            body: "# Tendências de Desenvolvimento Web para 2024\n\nO mundo do desenvolvimento web está em constante evolução, e 2024 promete ser um ano repleto de inovações.",
            slug: "2024-01-20-tendencias-web-2024"
          }
        ];
        
        setPosts(mockPosts);
      } catch (err) {
        console.error('Error loading blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading };
};
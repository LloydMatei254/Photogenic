export type Category = 
  | 'all'
  | 'portraits' 
  | 'street' 
  | 'documentary'
  | 'events' 
  | 'landscapes' 
  | 'lifestyle';

export interface Photo {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  description?: string;
  image: string;
  alt: string;
  year?: number;
  location?: string;
  featured?: boolean;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  date: string;
  readTime: string;
  content?: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: number;
  priceFormatted: string;
  image: string;
  benefits: string[];
  steps: string[];
}

export interface Product {
  id: string;
  name: string;
  ingredients: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  stock: number;
  usage: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  fullContent: string[];
  keyTips: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  treatment: string;
}

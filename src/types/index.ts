export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: 'floral-creations' | 'tealight-holders-diyas' | 'home-decor' | 'torans-hangings' | 'decorative-flowers' | 'accessories' | 'festive-decor';
  categoryName: string;
  description: string;
  shortDescription: string;
  craftDetails: string[];
  materials: string[];
  dimensions?: string;
  primaryImage: string;
  images: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean;
  availableColors: { name: string; hex: string; bgClass: string }[];
  customisable: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  customNote?: string;
}

export interface Category {
  id: Product['category'];
  name: string;
  title: string;
  description: string;
  image: string;
  bannerImage?: string;
  itemCount: number;
  accentColor: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  location: string;
}


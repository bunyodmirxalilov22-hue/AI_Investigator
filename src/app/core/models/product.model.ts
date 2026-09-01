export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description?: string;

  imageUrl?: string;

  price: Price;

  rating?: number;
  reviewCount?: number;

  specifications: ProductSpecification[];

  availability: ProductAvailability;

  createdAt: string;
  updatedAt: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export type ProductCategory =
  | 'smartphone'
  | 'laptop'
  | 'headphones'
  | 'tablet'
  | 'camera'
  | 'smartwatch'
  | 'other';

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductAvailability {
  inStock: boolean;
  quantity?: number;
}
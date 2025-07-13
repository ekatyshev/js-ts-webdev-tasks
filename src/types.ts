export interface ICategory {
  slug: string;
  name: string;
}

export interface IProduct {
  id: number;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  images: string[];
  stock: number;
}

export interface NavPanelConfigItem {
  label: string;
  path: string;
}

export interface CartItem {
  id: string;
  quantity: number;
}

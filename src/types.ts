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
}

export interface NavPanelConfigItem {
    label: string,
    path: string,
}

export interface CartItem {
    id: number;
    quantity: number;
}

export interface Cart {
    products: CartItem[];
    subtotal: number;
    discount: number;
    discountPercentage: number;
    total: number;
}
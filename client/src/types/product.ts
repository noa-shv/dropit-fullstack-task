export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
}

export interface ProductDetails extends Product {
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}

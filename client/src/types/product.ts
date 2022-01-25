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

export interface ProductQueryParams {
    categories?: Array<string>;
    title?: string;
    ids?: Array<string>;
}

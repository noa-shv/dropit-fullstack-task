import {Product} from './product';

export interface Order {
    productId: number,
    amount: number,
}

export interface OrderProduct extends Product {
    amount: number;
}

export interface Checkout {
    name: string;
    orders: Array<Order>
}

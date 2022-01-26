import {Product} from './product';

export interface Order {
    productId: number,
    amount: number,
}

export interface OrderProduct extends Product {
    amount: number;
}

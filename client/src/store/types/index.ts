import {ActionType} from "./action-types";

export interface Action {
    type: string,
    payload: string
}

export interface State {
    orders: Array<Order>
}

export interface Order {
    productId: string,
    amount: number,
}

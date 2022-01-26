import {Order} from '../../types/orders';

export interface Action {
    type: string,
    payload: number
}

export interface State {
    orders: Array<Order>
}

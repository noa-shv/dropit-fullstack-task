import {State, Action} from '../types'
import {ActionType} from '../types/action-types';
import {Order} from '../../types/orders';

const orderState: Array<Order> = [];

const ordersReducer = (state: Array<Order> = orderState , action:Action) => {
    switch(action.type) {
        case ActionType.ADD_ORDER:{
            const productId = action.payload;
            const productInCart = state.find(order => order.productId === productId)
            if(productInCart) {
                productInCart.amount ++;
            } else {
                state.push({ productId, amount: 1 });
            }

            return [...state];
        }
        default:
            return state
    }
};

export default ordersReducer;

export const selectNumberOfOrders = (state: State): Number => {
        let numOfOrders = 0;
        state.orders.forEach((order) => {
            numOfOrders += order.amount;
        });

       return numOfOrders;
};

export const selectOrderProductIds = (state: State): Array<number> => {
    const productIds = state.orders.map(order => order.productId);
    return productIds;
}

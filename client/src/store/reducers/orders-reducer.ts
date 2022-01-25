import {State, Action} from '../types'
import {ActionType} from '../types/action-types';

const initialState = {
    orders: []
}
export default (state: State = initialState , action:Action ) => {
    switch(action.type) {
        case ActionType.ADD_ORDER:{
            const productId = action.payload;
            const productInCart = state.orders.find(order => order.productId == productId)
            if(productInCart) {
                productInCart.amount ++;
            } else {
                state.orders.push({ productId, amount: 1 });
            }

            return {...state};
        }
        default:
            return state
    }
}

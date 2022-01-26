import {ActionType} from '../types/action-types';
import {Dispatch} from 'redux';

export const addOrder = (productId: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ADD_ORDER,
            payload: productId,
        })
    }
}

import { CartState } from '@app/cart/reducers/cart.state';
import { CartActionsTypes, CartUnion } from '@app/cart/actions/cart.actions';

const initialState: CartState = {
  items: []
};

export function CartReducer(state = initialState, action: CartUnion) {

  switch (action.type) {
    case CartActionsTypes.ADD_TO_CART_SUCCESS:
      return {...state, items: [...action.payload]};

    case CartActionsTypes.REMOVE_FROM_CART_SUCCESS:
      return {...state, items: [...action.payload]};

    case CartActionsTypes.UPDATE_QUANTITY_SUCCESS:
      return {...state, items: [...action.payload]};

    default:
      return state;
  }
}

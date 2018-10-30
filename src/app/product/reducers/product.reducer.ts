import { ProductActions } from './../actions/product.actions';
import { ProductState } from './product-state';
import { Action } from '@ngrx/store';

export const initialState: ProductState = { products: [] };

export function ProductReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ProductActions.GET_ALL_PRODUCTS:
      return state;
    default:
      return state;
  }
}

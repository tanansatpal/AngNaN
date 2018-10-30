import { ProductActions } from './../actions/product.actions';
import { ProductState } from './product-state';
import { Action } from '@ngrx/store';

export const initialState: ProductState = { selectedProduct: null, products: [] };

export function ProductReducer(state = initialState, { type, payload }: Action) {
  switch (type) {
    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS: {
      Object.assign({}, state, {
        selectedProduct: payload
      });
      return state;
    }
    case ProductActions.GET_ALL_PRODUCTS:
      return state;
    default:
      return state;
  }
}

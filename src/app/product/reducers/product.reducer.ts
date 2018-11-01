import { ProductActions } from './../actions/product.actions';
import { ProductState } from './product.state';
import { Action } from '@ngrx/store';
import { Product } from '@shared/models/product.model.ts';

export const initialState: ProductState = { selectedProduct: null, productIds: [], productEntities: {} };

export function ProductReducer(state = initialState, action: Action & { payload: any }) {
  switch (action.type) {
    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS: {
      Object.assign({}, state, {
        selectedProduct: action.payload
      });
      return state;
    }
    case ProductActions.GET_ALL_PRODUCTS:
      const products: Product[] = action.payload;
      const productIds: string[] = products.map(product => product._id);
      const productEntities = action.payload.reduce((_products: { [_id: string]: Product }, product: Product) => {
        Object.assign(_products, {
          [product._id]: product
        });
      }, {});

      Object.assign({}, state, {
        productIds: productIds,
        productEntities: productEntities
      });
      return state;
    default:
      return state;
  }
}

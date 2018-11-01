import * as fromProduct from './product/reducers/product.reducer';
import { ProductState } from './product/reducers/product.state';

import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromLayout from './layout/reducers/layout.reducers';
import * as fromUser from './user/reducers/user.reducer';

import { combineReducers, ActionReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

interface AppState {
  products: ProductState;
}

const reducers = {
  products: fromProduct.ProductReducer,
  auth: fromAuth.AuthReducer,
  user: fromUser.UserReducer,
  layout: fromLayout.LayoutReducer,
};

export const developmentReducer: ActionReducer<AppState> = combineReducers(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

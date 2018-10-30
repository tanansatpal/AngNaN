import * as fromProduct from './product/reducers/product.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromLayout from './layout/reducers/layout.reducers';
import * as fromUser from './user/reducers/user.reducer';

export const AppReducer = {
  products: fromProduct.ProductReducer,
  auth: fromAuth.AuthReducer,
  user: fromUser.UserReducer,
  layout: fromLayout.LayoutReducer,
};

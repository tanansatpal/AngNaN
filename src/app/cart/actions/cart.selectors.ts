import { createSelector } from '@ngrx/store';
import { CartState } from '@app/cart/reducers/cart.state';
import { AppState } from '@app/app.state';

const getCartState = (state: AppState) => state.cart;
const cart = (state: CartState) => state;
const itemCount = (state: CartState) => state.item_count;

export const getCart = createSelector(getCartState, cart);
export const getCartItemsCount = createSelector(getCartState, itemCount);

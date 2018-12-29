import { Action } from '@ngrx/store';

export enum CartActionsTypes {
  ADD_TO_CART = '[Page] Add To Cart API',
  ADD_TO_CART_SUCCESS = '[Add To Cart API] Page',
  ADD_TO_CART_FAILED = '[Add To Cart API] Message',
  REMOVE_FROM_CART = '[Cart Page] Remove Item API',
  REMOVE_FROM_CART_SUCCESS = '[Remove Item API] Cart Page',
  UPDATE_QUANTITY = '[Cart Page] Update Item Quantity API',
  UPDATE_QUANTITY_SUCCESS = '[Update Item Quantity API] Cart Page',
}

export class AddToCart implements Action {
  readonly type = CartActionsTypes.ADD_TO_CART;

  constructor(public payload: any) {
  }
}

export class AddToCartSuccess implements Action {
  readonly type = CartActionsTypes.ADD_TO_CART_SUCCESS;

  constructor(public payload: any) {
  }
}

export class AddToCartFailed implements Action {
  readonly type = CartActionsTypes.ADD_TO_CART_FAILED;
}

export class RemoveFromCart implements Action {
  readonly type = CartActionsTypes.REMOVE_FROM_CART;

  constructor(public payload: any) {
  }
}

export class RemoveFromCartSuccess implements Action {
  readonly type = CartActionsTypes.REMOVE_FROM_CART_SUCCESS;

  constructor(public payload: any) {
  }
}

export class UpdateQuantity implements Action {
  readonly type = CartActionsTypes.UPDATE_QUANTITY;

  constructor(public payload: any) {
  }
}

export class UpdateQuantitySuccess implements Action {
  readonly type = CartActionsTypes.UPDATE_QUANTITY_SUCCESS;

  constructor(public payload: any) {
  }
}

export type CartUnion =
  AddToCart
  | AddToCartSuccess
  | AddToCartFailed
  | RemoveFromCart
  | RemoveFromCartSuccess
  | UpdateQuantity
  | UpdateQuantitySuccess;

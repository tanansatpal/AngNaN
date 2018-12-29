import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AddToCart, CartActionsTypes } from '@app/cart/actions/cart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartService } from '@shared/services';

@Injectable()
export class CartEffects {
  @Effect()
  addToCart$: Observable<Action> = this.action$.pipe(
    ofType<AddToCart>(CartActionsTypes.ADD_TO_CART),
    mergeMap(action => {
      return this.cartService.addToCart(action.payload).pipe(
        map(data => ({type: CartActionsTypes.ADD_TO_CART_SUCCESS, payload: data})),
        catchError(() => of({type: CartActionsTypes.ADD_TO_CART_FAILED}))
      );
    })
  );


  constructor(private action$: Actions, private cartService: CartService) {
  }

}

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GetOrder, UserActionTypes } from '../actions/user.actions';
import { UserService } from '@shared/services';


@Injectable()
export class UserEffects {

  @Effect()
  getOrder$: Observable<Action> = this.actions$.pipe(
    ofType<GetOrder>(UserActionTypes.GET_ORDER),
    mergeMap(action => {
      return this.userService.getOrder(action.payload).pipe(
        map(data => ({type: UserActionTypes.GET_ORDER_SUCCESS, payload: data})),
        catchError(() => of({type: UserActionTypes.GET_ORDER_FAILED}))
      );
    })
  );

  constructor(private actions$: Actions, private userService: UserService) {
  }
}

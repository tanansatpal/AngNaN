import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '@shared/services';
import { AuthActionsTypes } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN),
    mergeMap(action => {
        return this.auth.login(action.payload).pipe(
          // If successful, dispatch success action with result
          map(data => ({type: 'LOGIN_SUCCESS', payload: data})),
          // If request fails, dispatch failed action
          catchError(() => of({type: 'LOGIN_FAILED'}))
        );
      }
    )
  );

  constructor(private auth: AuthService, private actions$: Actions) {
  }
}

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserActionTypes } from '../actions/user.actions';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions) {
  }
}

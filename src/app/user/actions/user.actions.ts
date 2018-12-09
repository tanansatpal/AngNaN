import { Action } from '@ngrx/store';

export enum UserActionTypes {
  GET_CURRENT_USER = '[User Page] Get Current User',
  GET_USER_SUCCESS = '[User API] Get User Success'
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GET_CURRENT_USER;
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;

  constructor(public payload: { user: any }) {
  }
}

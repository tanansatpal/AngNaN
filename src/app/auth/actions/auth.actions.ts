import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth API] Login Success',
  LOGOUT = '[Header] Logout',
  LOGOUT_SUCCESS = '[Auth API] Logout Success',
  GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS',
}

export class Login implements Action {
  readonly type = AuthActionsTypes.LOGIN;

  constructor(public payload: { username: string; password: string }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionsTypes.LOGIN_SUCCESS;
}

export class Logout implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionsTypes.LOGOUT_SUCCESS;

  constructor(public payload: { user: any }) {
  }
}

export class GetCurrentUserSuccess implements Action {
  readonly type = AuthActionsTypes.GET_CURRENT_USER_SUCCESS;

  constructor(public payload: { user: any }) {
  }
}

export type AuthUnion = Login | LoginSuccess | GetCurrentUserSuccess | Logout | LogoutSuccess;

import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth API] Login Success',
  LOGIN_FAILED = '[Auth API] Login Failed',
  LOGOUT = '[Header] Logout',
  LOGOUT_SUCCESS = '[Auth API] Logout Success',
  GET_CURRENT_USER = '[Any] Get Current User',
  AUTHORIZE = '[App Component] Authorize'
}

export class Login implements Action {
  readonly type = AuthActionsTypes.LOGIN;

  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionsTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: any }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionsTypes.LOGIN_FAILED;

  constructor(public payload: { error: any }) {}
}

export class Logout implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionsTypes.LOGOUT_SUCCESS;

  constructor(public payload: { user: any }) {}
}

export class GetCurrentUser implements Action {
  readonly type = AuthActionsTypes.GET_CURRENT_USER;
}

export class Authorize implements Action {
  readonly type = AuthActionsTypes.AUTHORIZE;
}

export type AuthUnion = Authorize | Login | LoginSuccess | LoginFailed | GetCurrentUser | Logout | LogoutSuccess;

export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';

  login() {
    return { type: AuthActions.LOGIN };
  }

  loginSuccess() {
    return { type: AuthActions.LOGIN_SUCCESS };
  }

  getCurrentUserSuccess(user) {
    return {
      type: AuthActions.GET_CURRENT_USER_SUCCESS,
      payload: user
    };
  }
}

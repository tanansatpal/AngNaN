import { Action } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: {}
};

export function AuthReducer(state = initialState, { type, payload }: Action & { payload }): AuthState {

  switch (type) {
    case AuthActions.LOGIN_SUCCESS: {
      return Object.assign(state, { isAuthenticated: true });
    }

    case AuthActions.GET_CURRENT_USER_SUCCESS: {
      return Object.assign(state, {
        currentUser: payload,
      });
    }

    default:
      return state;
  }
}

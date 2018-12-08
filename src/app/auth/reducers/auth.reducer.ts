import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: {},
};

export function AuthReducer(state = initialState, action: AuthActions.AuthUnion) {

  switch (action.type) {
    case AuthActions.AuthActionsTypes.LOGIN: {
      return state;
    }

    case AuthActions.AuthActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }

    case AuthActions.AuthActionsTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
}

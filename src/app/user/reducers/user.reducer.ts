import * as UserActions from '../actions/user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
  isLoggedIn: false,
  user: {}
};

export function UserReducer(state = initialState, action: UserActions.UserUnion) {

  switch (action.type) {
    case UserActions.UserActionTypes.GET_CURRENT_USER: {
      return state;
    }

    case UserActions.UserActionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    }

    default:
      return state;
  }
}


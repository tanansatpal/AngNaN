import * as UserActions from '../actions/user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
  order: null,
  selectedSection: null
};

export function UserReducer(state = initialState, action: UserActions.UserUnion) {

  switch (action.type) {
    case UserActions.UserActionTypes.GET_CURRENT_USER: {
      return state;
    }

    case UserActions.UserActionTypes.GET_ORDER: {
      return state;
    }

    case UserActions.UserActionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    }

    case UserActions.UserActionTypes.GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload
      };
    }

    case UserActions.UserActionTypes.GET_USER_FAILED: {
      return state;
    }

    case UserActions.UserActionTypes.GET_SELECTED_SECTION: {
      return state;
    }

    case UserActions.UserActionTypes.SET_SELECTED_SECTION: {
      return {
        ...state,
        selectedSection: action.payload
      };
    }

    default:
      return state;
  }
}

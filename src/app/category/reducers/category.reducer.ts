import * as CategoryActions from '../actions/category.actions';
import { CategoryState } from './category.state';

export const initialState: CategoryState = {
  category: null,
  filters: null,
  sort: '',
  page_size: 12,
  page: 1
};

export function CategoryReducer(state = initialState, action: CategoryActions.CategoryUnion) {

  switch (action.type) {
    case CategoryActions.CategoryActionsTypes.GET_CATEGORY: {
      return state;
    }

    case CategoryActions.CategoryActionsTypes.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        category: action.payload
      };
    }

    case CategoryActions.CategoryActionsTypes.GET_CATEGORY_FAILED: {
      return state;
    }

    case CategoryActions.CategoryActionsTypes.SET_PAGE_SIZE: {
      return {...state, page_size: action.payload};
    }

    case CategoryActions.CategoryActionsTypes.SET_SORT: {
      return {...state, sort: action.payload};
    }

    default:
      return state;
  }
}

import { AppState } from './app.state';

import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromUser from './user/reducers/user.reducer';
import * as fromCategory from './category/reducers/category.reducer';

import { combineReducers, ActionReducer } from '@ngrx/store';
import { environment } from '@env/environment';

const reducers = {
  auth: fromAuth.AuthReducer,
  user: fromUser.UserReducer,
  category: fromCategory.CategoryReducer
};

export const developmentReducer: ActionReducer<AppState> = combineReducers(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

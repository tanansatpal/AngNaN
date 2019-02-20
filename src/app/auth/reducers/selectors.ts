import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@app/auth/reducers/auth.state';

const getAuthState = createFeatureSelector('auth');
const authStatus = (state: AuthState) => state.isLoggedIn;
export const getAuthStatus = createSelector(
  getAuthState,
  authStatus
);

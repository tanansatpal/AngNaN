import { createSelector } from '@ngrx/store';
import { AuthState } from '@app/auth/reducers/auth.state';
import { AppState } from '@app/app.state';

const getAuthState = (state: AppState) => state.auth;
const authStatus = (state: AuthState) => state.isLoggedIn;
export const getAuthStatus = createSelector(getAuthState, authStatus);

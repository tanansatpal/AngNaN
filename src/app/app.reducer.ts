// import { AuthState } from './auth/reducers/auth.state';
//
// import * as fromAuth from './auth/reducers/auth.reducer';
//
// import { combineReducers, ActionReducer } from '@ngrx/store';
// import { environment } from '../environments/environment';
//
// interface AppState {
//   auth: AuthState;
// }
//
// const reducers = {
//   auth: fromAuth.AuthReducer
// };
//
// export const developmentReducer: ActionReducer<AppState> = combineReducers(reducers);
// const productionReducer: ActionReducer<AppState> = combineReducers(reducers);
//
// export function AppReducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }

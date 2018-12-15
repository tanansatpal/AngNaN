import { AuthState } from './auth/reducers/auth.state';
import { UserState } from './user/reducers/user.state';
import { CategoryState } from '@app/category/reducers/category.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  auth: AuthState;
  user: UserState;
  category: CategoryState;
}

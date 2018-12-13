import { createSelector } from '@ngrx/store';
import { UserState } from '@app/user/reducers/user.state';
import { AppState } from '@app/app.state';

const getUserState = (state: AppState) => state.user;
const currentOrder = (state: UserState) => state.order;
const currentSection = (state: UserState) => state.selectedSection;
export const getCurrentOrder = createSelector(getUserState, currentOrder);
export const getSelectedSection = createSelector(getUserState, currentSection);

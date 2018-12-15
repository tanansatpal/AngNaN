import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { CategoryState } from '@app/category/reducers/category.state';

const getCategoryState = (state: AppState) => state.category;
const currentCategory = (state: CategoryState) => state.category;
export const getCurrentCategory = createSelector(getCategoryState, currentCategory);

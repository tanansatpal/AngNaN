import { Action } from '@ngrx/store';

export enum CategoryActionsTypes {
  GET_CATEGORY = '[Category Page] Get Category Success',
  GET_CATEGORY_SUCCESS = '[Category API] Category Page',
  GET_CATEGORY_FAILED = '[Category API] Category Page'
}

export class GetCategory implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY;

  constructor(public payload: string) {
  }
}

export class GetCategorySuccess implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY_SUCCESS;

  constructor(public payload: { category: any; }) {
  }
}

export class GetCategoryFailed implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY_FAILED;
}

export type CategoryUnion = GetCategory | GetCategorySuccess;

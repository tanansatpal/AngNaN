import { Action } from '@ngrx/store';

export enum CategoryActionsTypes {
  GET_CATEGORY = '[Category Page] Get Category Success',
  GET_CATEGORY_SUCCESS = '[Category API] Category Page',
  GET_CATEGORY_FAILED = '[Category API] Message',

  SET_PAGE_SIZE = '[Category Page] Category State',
}

export class GetCategory implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY;

  constructor(public payload: string) {
  }
}

export class GetCategorySuccess implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetCategoryFailed implements Action {
  readonly type = CategoryActionsTypes.GET_CATEGORY_FAILED;
}

export class SetPageSize implements Action {
  readonly type = CategoryActionsTypes.SET_PAGE_SIZE;

  constructor(public payload: number) {
  }

}

export type CategoryUnion = GetCategory | GetCategorySuccess | GetCategoryFailed | SetPageSize;

import { Action } from '@ngrx/store';

export enum CategoryActionsTypes {
  GET_CATEGORY = '[Category Page] Get Category API',
  GET_CATEGORY_SUCCESS = '[Get Category API] Category Page',
  GET_CATEGORY_FAILED = '[Category API] Message',
  SET_PAGE_SIZE = '[Category Header Component] Product API',
  SET_SORT = '[Category Header Component] Get Sorted Product',
  SET_FACETS = '[Category API] Filters Category State',
  SET_TOTAL = '[Category API] Pagination Component',
  SET_PAGE = '[Category Page] Pagination Component',
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

export class SetSort implements Action {
  readonly type = CategoryActionsTypes.SET_SORT;

  constructor(public payload: string) {
  }
}

export class SetFacets implements Action {
  readonly type = CategoryActionsTypes.SET_FACETS;

  constructor(public payload: any) {
  }
}

export class SetTotal implements Action {
  readonly type = CategoryActionsTypes.SET_TOTAL;

  constructor(public payload: number) {
  }
}

export class SetPage implements Action {
  readonly type = CategoryActionsTypes.SET_PAGE;

  constructor(public payload: number) {
  }
}

export type CategoryUnion = GetCategory | GetCategorySuccess | GetCategoryFailed | SetPageSize | SetSort | SetFacets | SetTotal | SetPage;

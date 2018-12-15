import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ProductSectionService } from '@shared/services';
import { CategoryActionsTypes, GetCategory } from '@app/category/actions/category.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';


@Injectable()
export class CategoryEffects {
  @Effect()
  getCategory$: Observable<Action> = this.actions$.pipe(
    ofType<GetCategory>(CategoryActionsTypes.GET_CATEGORY),
    mergeMap(action => {
      return this.categoryService.getCategoryDetail(action.payload).pipe(
        map(data => ({type: CategoryActionsTypes.GET_CATEGORY_SUCCESS, payload: data})),
        catchError(() => of({type: CategoryActionsTypes.GET_CATEGORY_FAILED}))
      );
    })
  );

  constructor(private actions$: Actions, private categoryService: ProductSectionService) {
  }
}

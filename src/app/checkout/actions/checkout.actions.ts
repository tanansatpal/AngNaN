import { Action } from '@ngrx/store';

export enum CheckoutActionsTypes {
  GET_CURRENT_STEP = '[Checkout Component] Checkout State',
  SET_CURRENT_STEP = '[Checkout Section] Checkout State'
}

export class GetCurrentStep implements Action {
  readonly type = CheckoutActionsTypes.GET_CURRENT_STEP;
}

export class SetCurrentStep implements Action {
  readonly type = CheckoutActionsTypes.SET_CURRENT_STEP;

  constructor(public payload: number) {
  }
}

export type CheckoutUnion = GetCurrentStep | SetCurrentStep;

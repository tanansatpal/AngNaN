import { createSelector } from '@ngrx/store';
import { CheckoutState } from '@app/checkout/reducers/checkout.state';
import { AppState } from '@app/app.state';

const getCheckoutState = (state: AppState) => state.checkout;
const step = (state: CheckoutState) => state.step;

export const getCheckoutStep = createSelector(getCheckoutState, step);

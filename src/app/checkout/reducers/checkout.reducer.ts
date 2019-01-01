import { CheckoutState } from '@app/checkout/reducers/checkout.state';
import { CheckoutActionsTypes, CheckoutUnion } from '@app/checkout/actions/checkout.actions';

const initialState: CheckoutState = {
  step: 0
};

export function CheckoutReducer(state = initialState, action: CheckoutUnion) {

  switch (action.type) {

    case CheckoutActionsTypes.SET_CURRENT_STEP: {
      return {...state, step: action.payload};
    }

    default:
      return state;
  }
}

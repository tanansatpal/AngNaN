import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutAddressComponent } from './components/checkout-address/checkout-address.component';
import { CheckoutShippingComponent } from './components/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './components/checkout-review/checkout-review.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [CheckoutAddressComponent, CheckoutShippingComponent, CheckoutPaymentComponent, CheckoutReviewComponent, CheckoutComponent]
})
export class CheckoutModule {
}

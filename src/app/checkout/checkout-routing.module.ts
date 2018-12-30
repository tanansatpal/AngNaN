import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutAddressComponent } from '@app/checkout/components/checkout-address/checkout-address.component';
import { CheckoutShippingComponent } from '@app/checkout/components/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from '@app/checkout/components/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from '@app/checkout/components/checkout-review/checkout-review.component';
import { CheckoutComponent } from '@app/checkout/components/checkout/checkout.component';

const CheckoutRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {path: 'address', component: CheckoutAddressComponent},
      {path: 'shipping', component: CheckoutShippingComponent},
      {path: 'payment', component: CheckoutPaymentComponent},
      {path: 'review', component: CheckoutReviewComponent},
      { path: '', redirectTo: 'address', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CheckoutRoutes)],
  exports: [RouterModule]
})

export class CheckoutRoutingModule {
}

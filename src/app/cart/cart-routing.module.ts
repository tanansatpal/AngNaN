import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CartRoutes: Routes = [
  {
    path: '', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(CartRoutes)],
  exports: [RouterModule]
})

export class CartRoutingModule {
}

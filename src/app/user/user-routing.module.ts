import { OrdersComponent } from './components/orders/orders.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddressComponent } from './components/address/address.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const UserRoutes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'address', component: AddressComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}

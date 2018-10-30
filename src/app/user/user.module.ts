import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddressComponent } from './components/address/address.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [OrdersComponent, OverviewComponent, AddressComponent]
})
export class UserModule {
}

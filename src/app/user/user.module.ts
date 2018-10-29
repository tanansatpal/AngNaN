import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OverviewComponent } from './overview/overview.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, OverviewComponent, AddressComponent]
})
export class UserModule {
}

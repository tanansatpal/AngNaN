import { UserComponent } from './user.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'address', component: AddressComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: '', redirectTo: 'profile', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}

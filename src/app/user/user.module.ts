import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserReducer } from './reducers/user.reducer';

import { OrdersComponent } from './components/orders/orders.component';
import { UserComponent } from './user.component';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([]),
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [OrdersComponent, UserComponent, AddressComponent, ProfileComponent, UserSidebarComponent, WishlistComponent]
})
export class UserModule {
}

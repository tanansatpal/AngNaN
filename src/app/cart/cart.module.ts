import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineItemComponent } from './components/line-item/line-item.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from '@app/cart/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '@app/cart/reducers/cart.effects';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from '@app/cart/cart-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', CartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [LineItemComponent, CartComponent]
})
export class CartModule {
}

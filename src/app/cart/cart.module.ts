import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineItemComponent } from './components/line-item/line-item.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from '@app/cart/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '@app/cart/reducers/cart.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', CartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [LineItemComponent]
})
export class CartModule {
}

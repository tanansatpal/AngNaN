import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [DetailComponent]
})
export class ProductModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { ComponentModule } from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentModule
  ],
  declarations: [DetailComponent]
})
export class ProductModule {
}

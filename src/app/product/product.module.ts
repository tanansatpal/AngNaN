import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared/index';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [DetailComponent]
})
export class ProductModule {
}

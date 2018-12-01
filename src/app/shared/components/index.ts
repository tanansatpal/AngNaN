import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { CollectionProductsComponent } from './collection-products/collection-products.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';

@NgModule({
  declarations: [CollectionProductsComponent, ProductGridItemComponent],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports: [OwlModule, CollectionProductsComponent, ProductGridItemComponent]
})
export class ComponentModule {
}

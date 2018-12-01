import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { CollectionProductsComponent } from './collection-products/collection-products.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';

@NgModule({
  declarations: [CollectionProductsComponent, ProductGridItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule
  ],
  exports: [OwlModule, CollectionProductsComponent, ProductGridItemComponent]
})
export class ComponentModule {
}

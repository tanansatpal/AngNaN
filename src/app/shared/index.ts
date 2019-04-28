import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { CollectionProductsComponent } from './components/collection-products/collection-products.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [CollectionProductsComponent, ProductGridItemComponent, ImagePipe],
  imports: [CommonModule, RouterModule, OwlModule, FontAwesomeModule, BsDropdownModule.forRoot(), TabsModule.forRoot()],
  exports: [
    OwlModule,
    FontAwesomeModule,
    BsDropdownModule,
    TabsModule,
    CollectionProductsComponent,
    ProductGridItemComponent,
    ImagePipe
  ]
})
export class SharedModule {}

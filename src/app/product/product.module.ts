import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { ComponentModule } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentModule,
    FontAwesomeModule,
    TabsModule
  ],
  declarations: [DetailComponent]
})
export class ProductModule {
}

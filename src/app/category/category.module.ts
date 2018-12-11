import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';

import { FiltersComponent } from './components/filters/filters.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckboxFiltersComponent } from './components/checkbox-filters/checkbox-filters.component';
import { RadioFiltersComponent } from './components/radio-filters/radio-filters.component';
import { RangeFiltersComponent } from './components/range-filters/range-filters.component';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    FiltersComponent, ProductsComponent,
    CheckboxFiltersComponent, RadioFiltersComponent,
    RangeFiltersComponent, CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule {
}

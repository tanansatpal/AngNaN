import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { FiltersComponent } from './components/filters/filters.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckboxFiltersComponent } from './components/checkbox-filters/checkbox-filters.component';
import { RadioFiltersComponent } from './components/radio-filters/radio-filters.component';
import { RangeFiltersComponent } from './components/range-filters/range-filters.component';
import { CategoryComponent } from './category.component';
import { BannerComponent } from './components/banner/banner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { StoreModule } from '@ngrx/store';
import { CategoryReducer } from '@app/category/reducers/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from '@app/category/reducers/category.effects';
import { SharedModule } from '@shared/index';

@NgModule({
  declarations: [
    FiltersComponent, ProductsComponent,
    CheckboxFiltersComponent, RadioFiltersComponent,
    RangeFiltersComponent, CategoryComponent, BannerComponent, PaginationComponent, CategoryHeaderComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('category', CategoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
    NgxPaginationModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule {
}

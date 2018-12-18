import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import { getCategoryFilters, getCategoryPageSize, getCategorySort } from '@app/category/actions/category.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() category: any;

  products: any;
  products$: Subscription;
  filters: any;
  filters$: Subscription;
  sort: any;
  sort$: Subscription;
  pageSize: any;
  pageSize$: Subscription;

  constructor(private productService: ProductSectionService, private store: Store<{ category }>) {
  }

  ngOnInit() {
    this.filters$ = this.store.pipe(select(getCategoryFilters)).subscribe(filters => {
      this.filters = filters;
      if (filters) {
        this.getProducts(this.filters, this.sort, this.pageSize);
      }
    });
    this.sort$ = this.store.pipe(select(getCategorySort)).subscribe(sort => {
      this.sort = sort;
      if (sort) {
        this.getProducts(this.filters, this.sort, this.pageSize);
      }
    });
    this.pageSize$ = this.store.pipe(select(getCategoryPageSize)).subscribe(pageSize => {
      this.pageSize = pageSize;
      if (pageSize) {
        this.getProducts(this.filters, this.sort, this.pageSize);
      }
    });
  }

  getProducts(filters, sort, limit) {
    if (!filters) {
      filters = {};
    }
    filters['categories'] = this.category.alias;
    this.products$ = this.productService.getProducts(filters, true, this.category.facet_group, sort, 0, limit).subscribe(result => {
      this.products = result;
    });
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
    this.filters$.unsubscribe();
    this.sort$.unsubscribe();
    this.pageSize$.unsubscribe();
  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import {
  getCategoryFilters,
  getCategoryPage,
  getCategoryPageSize,
  getCategoryProductsTotal,
  getCategorySort
} from '@app/category/actions/category.selectors';
import { Subscription } from 'rxjs';
import { SetFacets, SetTotal } from '@app/category/actions/category.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() category: any;
  @Input() paginationConfig: any;

  products: any;
  products$: Subscription;
  filters: any = {};
  filters$: Subscription;
  sort: any;
  sort$: Subscription;
  pageSize: number;
  pageSize$: Subscription;
  page: number;
  page$: Subscription;
  total$: Subscription;

  constructor(private productService: ProductSectionService, private store: Store<{ category }>) {
  }

  ngOnInit() {
    this.filters$ = this.store.pipe(select(getCategoryFilters)).subscribe(filters => {
      if (filters) {
        this.filters = filters;
        this.getProducts();
      }
    });
    this.sort$ = this.store.pipe(select(getCategorySort)).subscribe(sort => {
      if (sort) {
        this.sort = sort;
        this.getProducts();
      }
    });
    this.page$ = this.store.pipe(select(getCategoryPage)).subscribe(page => {
      this.page = page;
      this.paginationConfig.currentPage = page;
      if (page > 1) {
        this.getProducts();
      }
    });
    this.pageSize$ = this.store.pipe(select(getCategoryPageSize)).subscribe(pageSize => {
      this.paginationConfig.itemsPerPage = pageSize;
      if (pageSize) {
        this.pageSize = pageSize;
        this.getProducts();
      }
    });
    this.total$ = this.store.pipe(select(getCategoryProductsTotal)).subscribe(result => {
      this.paginationConfig.totalItems = result;
    });
  }

  getProducts() {
    this.filters['categories'] = this.category.alias;
    this.products$ = this.productService.getProducts(this.filters, true,
      this.category.facet_group, this.sort,
      (this.page * this.pageSize) - this.pageSize + 1,
      this.pageSize)
      .subscribe(result => {
        this.products = result['data'];
        this.store.dispatch(new SetFacets(result['facets']));
        this.store.dispatch(new SetTotal(result['paging'].total));
      });
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
    this.filters$.unsubscribe();
    this.sort$.unsubscribe();
    this.pageSize$.unsubscribe();
    this.page$.unsubscribe();
    this.total$.unsubscribe();
  }

}

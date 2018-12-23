import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetPageSize, SetSort } from '@app/category/actions/category.actions';
import { getCategoryPage, getCategoryPageSize, getCategoryProductsTotal } from '@app/category/actions/category.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit, OnDestroy {

  pageSize: number;
  page: number;
  total: number;
  first: number;
  last: number;
  pageSizes: any[];
  pageSize$: Subscription;
  total$: Subscription;
  page$: Subscription;

  constructor(private store: Store<{ category }>) {
    this.pageSizes = [12, 24, 'All'];
  }

  ngOnInit() {
    this.pageSize$ = this.store.pipe(select(getCategoryPageSize)).subscribe(pageSize => {
      this.pageSize = pageSize;
    });
    this.total$ = this.store.pipe(select(getCategoryProductsTotal)).subscribe(total => {
      this.total = total;
    });
    this.page$ = this.store.pipe(select(getCategoryPage)).subscribe(page => {
      this.page = page;
    });
    this.first = (this.page * this.pageSize) - this.pageSize + 1;
    this.last = this.page * this.pageSize;
  }

  setPageSize(pageSize) {
    this.store.dispatch(new SetPageSize(pageSize));
  }

  changeSort(event) {
    const sort = event.target.value;
    this.store.dispatch(new SetSort(sort));
  }

  ngOnDestroy(): void {
    this.pageSize$.unsubscribe();
    this.total$.unsubscribe();
    this.page$.unsubscribe();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getCategoryPage, getCategoryPageSize, getCategoryProductsTotal } from '@app/category/actions/category.selectors';
import { SetPage } from '@app/category/actions/category.actions';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() config: PaginationInstance;
  pageSize: number;
  page: number;
  total: number;
  first: number;
  last: number;
  pageSize$: Subscription;
  total$: Subscription;
  page$: Subscription;

  constructor(private store: Store<{ category }>) {
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

  private handlePagination() {
    const pages = Math.ceil(this.total / this.pageSize);
    console.log(pages);
  }

  next() {
    this.setPage(this.page + 1);
    this.handlePagination();
  }

  previous() {
    this.setPage(this.page - 1);
  }

  setPage(page) {
    this.store.dispatch(new SetPage(page));
    this.handlePagination();
  }

}

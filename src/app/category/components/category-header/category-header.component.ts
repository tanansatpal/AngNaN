import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetPageSize } from '@app/category/actions/category.actions';
import { getCategoryPageSize } from '@app/category/actions/category.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit, OnDestroy {

  pageSize: number;
  pageSizes: any[];
  pageSize$: Subscription;

  constructor(private store: Store<{ category }>) {
    this.pageSizes = [12, 24, 'All'];
  }

  ngOnInit() {
    this.pageSize$ = this.store.pipe(select(getCategoryPageSize)).subscribe(pageSize => {
      this.pageSize = pageSize;
    });
  }

  setPageSize(pageSize) {
    this.store.dispatch(new SetPageSize(pageSize));
  }

  ngOnDestroy(): void {
    if (this.pageSize$) {
      this.pageSize$.unsubscribe();
    }
  }

}

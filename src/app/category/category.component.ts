import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import { GetCategory, SetPage } from '@app/category/actions/category.actions';
import { getCategoryPage, getCategoryProductsTotal, getCurrentCategory } from '@app/category/actions/category.selectors';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  category: any;
  total$: Subscription;
  total: number;
  page: number;
  page$: Subscription;
  categoryDetail$: Subscription;
  paginationConfig: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: this.page,
    totalItems: this.total
  };

  constructor(private categoryService: ProductSectionService, private store: Store<{ category }>, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      this.store.dispatch(new GetCategory(paramMap.get('alias')));
    });
  }

  ngOnInit() {
    this.categoryDetail$ = this.store.pipe(select(getCurrentCategory)).subscribe(result => {
      if (result) {
        result.image = result.images && result.images.length ? result.images[0] : null;
        this.category = result;
      }
    });
    this.total$ = this.store.pipe(select(getCategoryProductsTotal)).subscribe(result => {
      this.total = result;
    });
    this.page$ = this.store.pipe(select(getCategoryPage)).subscribe(result => {
      console.log(result);
      this.page = result;
    });
  }

  onPageChange(number: number) {
    this.store.dispatch(new SetPage(number));
  }

  ngOnDestroy(): void {
    this.categoryDetail$.unsubscribe();
    this.total$.unsubscribe();
    this.page$.unsubscribe();
  }
}

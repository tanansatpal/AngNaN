import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import { GetCategory } from '@app/category/actions/category.actions';
import { getCurrentCategory } from '@app/category/actions/category.selectors';
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
  categoryDetail$: Subscription;
  paginationConfig: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 1
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
  }

  ngOnDestroy(): void {
    this.categoryDetail$.unsubscribe();
  }
}

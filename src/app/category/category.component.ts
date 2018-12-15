import { Component, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import { GetCategory } from '@app/category/actions/category.actions';
import { getCurrentCategory } from '@app/category/actions/category.selectors';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: any;

  constructor(private categoryService: ProductSectionService, private store: Store<{ category }>) {
    this.store.dispatch(new GetCategory('ldnasd'));
  }

  ngOnInit() {
    this.store.pipe(select(getCurrentCategory)).subscribe(result => {
      this.category = result;
    });
    this.categoryService.getCategoryDetail('asdsad').subscribe(result => {

    });
  }

}

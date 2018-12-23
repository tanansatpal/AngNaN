import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetPage } from '@app/category/actions/category.actions';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() config: PaginationInstance;

  constructor(private store: Store<{ category }>) {
  }

  ngOnInit() {
  }

  setPage(page) {
    this.store.dispatch(new SetPage(page));
    this.config.currentPage = page;
  }

}

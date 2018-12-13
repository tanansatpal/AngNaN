import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetOrder } from '@app/user/actions/user.actions';
import { getCurrentOrder } from '../../reducers/selectors';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: any;
  order$: Subscription;

  constructor(private store: Store<{ user }>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const orderId = params['params']['id'];
      this.store.dispatch(new GetOrder(orderId));
      this.getOrder();
    });
  }

  getOrder() {
    this.order$ = this.store.pipe(select(getCurrentOrder)).subscribe(result => {
      this.order = result;
    }, err => {
      console.error(err);
    });
  }

  ngOnDestroy() {
    if (this.order$) {
      this.order$.unsubscribe();
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCart } from '@app/cart/actions/cart.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: any;
  cart$: Subscription;

  constructor(private store: Store<{ cart }>) {
  }

  ngOnInit() {
    this.cart$ = this.store.pipe(select(getCart)).subscribe(result => {
      this.cart = result;
    });
  }

  ngOnDestroy(): void {
    this.cart$.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { getCart } from '@app/cart/actions/cart.selectors';
import { Subscription } from 'rxjs';
import { getCheckoutStep } from '@app/checkout/actions/checkout.selectors';
import { NavigationEnd, Router } from '@angular/router';
import { SetCurrentStep } from '@app/checkout/actions/checkout.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  cart: any;
  cart$: Subscription;
  step: number;
  step$: Subscription;
  sections = [
    {url: '/checkout/address', title: 'Address', disabled: true, step: 1},
    {url: '/checkout/shipping', title: 'Delivery Method', disabled: true, step: 2},
    {url: '/checkout/payment', title: 'Payment Method ', disabled: true, step: 3},
    {url: '/checkout/review', title: 'Order Review', disabled: true, step: 4}
  ];

  router$: Subscription;
  currentUrl: string;

  constructor(private store: Store<AppState>, private router: Router) {
    this.router$ = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.setStep();
      }
    });
  }

  setStep() {
    let step = 1;
    for (const section of this.sections) {
      if (section.url === this.currentUrl) {
        step = section.step;
      }
    }
    this.store.dispatch(new SetCurrentStep(step));
  }

  ngOnInit() {
    this.cart$ = this.store.pipe(select(getCart)).subscribe(cart => this.cart = cart);
    this.step$ = this.store.pipe(select(getCheckoutStep)).subscribe(step => {
      this.step = step;
      this.handleSteps();
    });
  }

  private handleSteps() {
    this.sections = this.sections.map((section, index) => {
      if (index < this.step) {
        section.disabled = false;
      }
      return section;
    });
  }

  ngOnDestroy() {
    this.cart$.unsubscribe();
  }

}

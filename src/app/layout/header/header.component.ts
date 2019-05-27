import { Component, OnInit, HostListener, Inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { getAuthStatus } from '@app/auth/reducers/selectors';
import { Subscription } from 'rxjs';
import { getCart, getCartItemsCount } from '@app/cart/actions/cart.selectors';
import { AppState } from '@app/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faBars = faBars;
  homeHeader = false;
  isAuthenticated = false;
  isAuthenticated$: Subscription;
  router$: Subscription;
  cartItemCount: number;
  cartItemCount$: Subscription;
  cart: any;
  cart$: Subscription;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.homeHeader = this.router.url === '/';
    this.isAuthenticated$ = this.store.pipe(select(getAuthStatus)).subscribe(result => {
      this.isAuthenticated = result;
    });
    this.cartItemCount$ = this.store.pipe(select(getCartItemsCount)).subscribe(count => (this.cartItemCount = count));
    this.cart$ = this.store.pipe(select(getCart)).subscribe(cart => (this.cart = cart));
    this.router$ = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.homeHeader = val.url === '/';
      }
    });
  }

  // // todo universal support
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const topbar = document.getElementById('topbar').offsetHeight;
  //   if (window.pageYOffset > topbar) {
  //     const element = document.getElementById('navbar');
  //     element.classList.add('fixed-top');
  //   } else {
  //     const element = document.getElementById('navbar');
  //     element.classList.remove('fixed-top');
  //   }
  // }

  ngOnDestroy() {
    if (this.router$) {
      this.router$.unsubscribe();
    }
    if (this.isAuthenticated$) {
      this.isAuthenticated$.unsubscribe();
    }
    if (this.cartItemCount$) {
      this.cartItemCount$.unsubscribe();
    }
  }
}

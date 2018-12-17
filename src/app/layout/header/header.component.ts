import { Component, OnInit, HostListener, Inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getAuthStatus } from '@app/auth/reducers/selectors';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

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

  constructor(private router: Router, @Inject(DOCUMENT) document, private store: Store<{ auth }>) {
  }

  ngOnInit() {
    this.homeHeader = this.router.url === '/';
    this.isAuthenticated$ = this.store.pipe(select(getAuthStatus)).subscribe(result => {
      this.isAuthenticated = result;
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.homeHeader = val.url === '/';
      }
    });
  }

  // todo universal support
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const topbar = document.getElementById('topbar').offsetHeight;
    if (window.pageYOffset > topbar) {
      const element = document.getElementById('navbar');
      element.classList.add('fixed-top');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('fixed-top');
    }
  }

  ngOnDestroy() {
    if (this.router$) {
      this.router$.unsubscribe();
    }
    if (this.isAuthenticated$) {
      this.isAuthenticated$.unsubscribe();
    }
  }

}

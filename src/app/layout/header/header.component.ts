import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getAuthStatus } from '@app/auth/reducers/selectors';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeHeader = false;
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, @Inject(DOCUMENT) document, private store: Store<{ auth }>) {
  }

  ngOnInit() {
    this.homeHeader = this.router.url === '/';
    this.isAuthenticated$ = this.store.pipe(select(getAuthStatus));
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.homeHeader = val.url === '/';
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const topbar = document.getElementById('topbar').offsetHeight;
    if (window.pageYOffset > topbar) {
      const element = document.getElementById('navbar');
      element.classList.add('fixed-top');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('fixed-top');
    }
  }

}

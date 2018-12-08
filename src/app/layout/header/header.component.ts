import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getAuthStatus } from '@app/auth/reducers/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeHeader: boolean = false;
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, private store: Store<{ auth }>) {
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

}

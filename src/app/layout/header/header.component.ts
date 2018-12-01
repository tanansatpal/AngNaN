import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeHeader: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.homeHeader = this.router.url === '/';
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.homeHeader = val.url === '/';
      }
    });
  }

}

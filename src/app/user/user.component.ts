import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@shared/services';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  sidebarSections: any;
  currentUrl: string;
  selectedSection: any;
  router$: Subscription;
  orderCount: number;
  orderCount$: Subscription;

  constructor(private userService: UserService, private router: Router) {
    this.router$ = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.setSelectedSection();
      }
    });
  }

  ngOnInit() {
    this.orderCount$ = this.userService.getOrdersCount().subscribe(count => {
      this.orderCount = count;
      this.sidebarSections = [
        {
          url: '/user/orders',
          title: 'Orders',
          icon: '#paper-bag-1',
          extra: `<div class="badge badge-pill badge-dark font-weight-normal px-3">${this.orderCount}</div>`
        },
        {
          url: '/user/profile',
          title: 'Profile',
          description: `Maecenas sollicitudin. In rutrum. In convallis.
            Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis. Fusce dui leo, imperdiet in.`,
          icon: '#male-user-1'
        },
        {
          url: '/user/address',
          title: 'Addresses',
          icon: '#navigation-map-1'
        }
      ];
      this.setSelectedSection();
    });
  }


  setSelectedSection() {
    if (this.sidebarSections) {
      this.selectedSection = this.sidebarSections.filter(section => section.url === this.currentUrl).shift();
    }
  }

  ngOnDestroy() {
    if (this.router$) {
      this.router$.unsubscribe();
    }
    if (this.orderCount$) {
      this.orderCount$.unsubscribe();
    }
  }

}

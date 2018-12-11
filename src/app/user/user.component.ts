import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services';

@Component({
  selector: 'app-overview',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sidebarSections: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.sidebarSections = [
      {
        url: '/user/orders',
        title: 'Orders',
        icon: '#paper-bag-1',
        extra: `<div class="badge badge-pill badge-dark font-weight-normal px-3">5</div>`
      },
      {
        url: '/user/profile',
        title: 'Profile',
        icon: '#male-user-1'
      },
      {
        url: '/user/address',
        title: 'Addresses',
        icon: '#navigation-map-1'
      }
    ];
  }

}

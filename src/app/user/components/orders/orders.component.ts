import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  orders: any;
  orders$: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orders$ = this.userService.getOrders().subscribe(result => {
      this.orders = result;
    }, err => {
      console.error(err);
    });
  }

  ngOnDestroy() {
    if (this.orders$) {
      this.orders$.unsubscribe();
    }
  }

}

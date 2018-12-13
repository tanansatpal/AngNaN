import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '@shared/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: any;
  order$: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const orderId = params['params']['id'];
      this.getOrder(orderId);
    });
  }

  getOrder(orderId) {
    this.order$ = this.userService.getOrder(orderId).subscribe(result => {
      this.order = result;
    }, err => {
      console.error(err);
    });
  }

  ngOnDestroy() {
    if (this.order$) {
      this.order$.unsubscribe();
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
    if (this.item.image_url && this.item.image_url.indexOf('http') === -1) {
      this.item.image_url = `${environment.CDN_URL}${this.item.image_url}`;
    }
  }

}

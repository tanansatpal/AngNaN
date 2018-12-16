import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.scss']
})
export class ProductGridItemComponent implements OnInit {

  @Input() product: any;

  constructor() {
  }

  ngOnInit() {
    if (this.product.images && this.product.images.length) {
      this.product.image = `${environment.CDN_URL}${this.product.images[0].image}`;
    } else {
      this.product.image = null;
    }
  }

}

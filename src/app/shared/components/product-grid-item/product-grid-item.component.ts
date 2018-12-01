import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

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
    this.product.image = `${environment.CDN_URL}${this.product.images[0].image}`;
  }

}

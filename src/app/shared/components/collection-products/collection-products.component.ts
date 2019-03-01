import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionProductsComponent implements OnInit {
  @Input() collection: any = {};
  @Input() products: any = [];
  sliderOptions: any = {};

  constructor() {}

  ngOnInit() {
    this.sliderOptions = {
      items: 4,
      margin: 10,
      dots: true,
      responsiveClass: true,
      nav: false,
      autoHeight: true
    };
  }
}

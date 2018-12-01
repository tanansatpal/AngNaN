import { Component, OnInit, Input } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.scss']
})
export class CollectionProductsComponent implements OnInit {
  @Input('collection') collectionAlias: string;
  products: any = [];
  sliderOptions: any = {};
  collection: any = {};

  constructor(private productService: ProductSectionService) {
  }

  ngOnInit() {
    this.sliderOptions = {
      items: 1,
      margin: 10,
      navText: [
        '<img src="../../../../assets/img/prev.svg" alt="" width="50">',
        '<img src="../../../../assets/img/next.svg" alt="" width="50">'
      ],
      dots: false,
      responsiveClass: true,
      nav: true,
      autoHeight: true
    };
    this.getCollection();
  }

  getCollection() {
    this.productService.getCollections({alias: this.collectionAlias})
      .subscribe(result => {
        this.collection = result[0];
      }, err => {

      });
  }

  getProducts() {
    this.productService.getProducts({collection: this.collectionAlias})
      .subscribe(result => {
        this.collection = result['data'][0];
      }, err => {

      });
  }

}

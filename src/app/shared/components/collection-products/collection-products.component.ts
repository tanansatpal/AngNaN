import { Component, OnInit, Input } from '@angular/core';
import { ProductSectionService } from '@shared/services';

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.scss']
})
export class CollectionProductsComponent implements OnInit {
  @Input() collectionAlias: string;
  products: any = [];
  sliderOptions: any = {};
  collection: any = {};

  constructor(private productService: ProductSectionService) {
  }

  ngOnInit() {
    this.sliderOptions = {
      items: 4,
      margin: 10,
      dots: true,
      responsiveClass: true,
      nav: false,
      autoHeight: true
    };
    this.getCollection();
  }

  getCollection() {
    this.productService.getCollections({ alias: this.collectionAlias })
      .subscribe(result => {
        this.collection = result[0];
        this.getProducts();
      });
  }

  getProducts() {
    this.productService.getProducts({ collections: this.collectionAlias })
      .subscribe(result => {
        this.products = result['data'];
      });
  }

}

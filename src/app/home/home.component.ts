import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService, SiteService } from '@shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subsList: Subscription[] = [];
  brands = [];
  slides = [];
  collection = {};
  products = [];

  constructor(private productService: ProductSectionService, private siteService: SiteService) {}

  ngOnInit() {
    this.subsList.push(this.productService.getBrands().subscribe(data => (this.brands = data)));
    this.subsList.push(this.siteService.getSlides().subscribe(data => (this.slides = data)));
    this.subsList.push(
      this.productService
        .getCollections({ alias: 'your-favourites' })
        .subscribe(result => (this.collection = result.shift()))
    );
    this.subsList.push(
      this.productService
        .getProducts({ collections: 'your-favourites' })
        .subscribe(result => (this.products = result['data']))
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.subsList) {
      sub.unsubscribe();
    }
  }
}

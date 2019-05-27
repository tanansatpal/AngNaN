import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService, SiteService } from '@shared/services';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  brands = [];
  slides = [];
  collection = {};
  products = [];

  constructor(private productService: ProductSectionService, private siteService: SiteService) {}

  ngOnInit() {
    this.subs.sink = this.productService.getBrands().subscribe(data => (this.brands = data));
    this.subs.sink = this.siteService.getSlides().subscribe(data => (this.slides = data));
    this.subs.sink = this.productService
      .getCollections({ alias: 'your-favourites' })
      .subscribe(result => (this.collection = result.shift()));
    this.subs.sink = this.productService
      .getProducts({ collections: 'your-favourites' })
      .subscribe(result => (this.products = result['data']));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

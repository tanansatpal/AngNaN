import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSectionService, SiteService } from '@shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  brands$: Subscription;
  slides$: Subscription;
  brands = [];
  slides = [];

  constructor(private productService: ProductSectionService, private siteService: SiteService) {}

  ngOnInit() {
    this.brands$ = this.productService.getBrands().subscribe(data => (this.brands = data));
    this.slides$ = this.siteService.getSlides().subscribe(data => (this.slides = data));
  }

  ngOnDestroy(): void {
    if (this.brands$) {
      this.brands$.unsubscribe();
    }
    if (this.slides$) {
      this.slides$.unsubscribe();
    }
  }
}

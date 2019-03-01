import { Component, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  brands$;

  constructor(private productService: ProductSectionService) {}

  ngOnInit() {
    this.brands$ = this.productService.getBrands();
  }
}

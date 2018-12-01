import { Component, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: any = [];
  sliderOptions: any = {};

  constructor(private productService: ProductSectionService) {
  }

  ngOnInit() {
    this.sliderOptions = {
      items: 6,
      margin: 10,
      dots: true,
      responsiveClass: true,
      nav: false,
      autoHeight: true
    };
    this.productService.getBrands()
      .subscribe(result => {
        this.brands = result.filter(brand => {
          if (brand.images && brand.images.length) {
            brand.image = `${environment.CDN_URL}${brand.images[0].image}`;
            return true;
          } else {
            return false;
          }
        });
      }, err => {

      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductSectionService } from '@shared/services';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { Store } from '@ngrx/store';
import { AddToCart } from '@app/cart/actions/cart.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  faStar = faStar;
  product: any = {};
  productAlias: string;
  sliderOptions: any;

  constructor(
    private productService: ProductSectionService,
    private route: ActivatedRoute,
    private store: Store<{ cart }>
  ) {
    this.route.paramMap.subscribe(paramMap => {
      this.productAlias = paramMap.get('alias');
    });
    this.sliderOptions = {
      items: 1,
      margin: 10,
      navText: [
        '<img src="../../../../assets/img/prev.svg" alt="" width="50">',
        '<img src="../../../../assets/img/next.svg" alt="" width="50">'
      ],
      dots: true,
      responsiveClass: true,
      nav: true,
      autoHeight: true
    };
  }

  ngOnInit() {
    this.productService.getProduct(this.productAlias).subscribe(result => {
      const product = result[0];
      product.images = product.images.map(image => {
        image.image = `${environment.CDN_URL}${image.image}`;
        return image;
      });
      this.product = product;
    });
  }

  getImage(image) {
    return {
      background: `center center url(${image.image}) no-repeat`,
      'background-size': 'cover'
    };
  }

  addToCart() {
    this.store.dispatch(new AddToCart({ product_id: this.product._id, quantity: 1 }));
  }
}

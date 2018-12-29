import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@shared/services/api.service';
import { environment } from '@env/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  API_URL = environment.API_URL;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private api: ApiService) {
  }

  private setCartId(data: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart_id', data);
    }
  }

  getCartId() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('cart_id');
    }
    return null;
  }

  addToCart(data) {
    return this.api.put(`${this.API_URL}carts/_/addItem`, {data: data}, {params: {q: JSON.stringify({_id: this.getCartId()})}}).pipe(
      map(response => {
        this.setCartId(response['cart']._id);
        return response['cart'];
      })
    );
  }
}

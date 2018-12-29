import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@shared/services/api.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  API_URL = environment.API_URL;

  constructor(private api: ApiService) {
  }

  addToCart(data) {
    return this.api.put(`${this.API_URL}carts/_/addItem`, {data: data}).pipe(
      map(response => response['cart'])
    );
  }
}

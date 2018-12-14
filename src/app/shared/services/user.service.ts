import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private api: ApiService) {
  }

  getOrders(params = {}) {
    return this.api.get(`${this.API_URL}orders`, params);
  }

  getOrder(id) {
    return this.api.get(`${this.API_URL}orders/${id}`);
  }

  getOrdersCount() {
    return this.api.get(`${this.API_URL}orders/count`);
  }
}

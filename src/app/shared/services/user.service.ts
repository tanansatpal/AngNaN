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
    return this.api.get(`${this.API_URL}entity/ms.orders`, params);
  }

  getOrder(id) {
    return this.api.get(`${this.API_URL}entity/ms.orders/${id}`);
  }

  getOrdersCount() {
    return this.api.get(`${this.API_URL}entity/ms.orders/_/count`);
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private api: ApiService) {}

  getOrders(params = {}) {
    return this.api.get(`${this.API_URL}orders`, params).pipe(map(response => response['data']));
  }

  getOrder(id) {
    return this.api.get(`${this.API_URL}orders/${id}`).pipe(map(response => response['data']));
  }

  getOrdersCount() {
    return this.api.get(`${this.API_URL}orders/_/count`).pipe(map(response => response['data']));
  }

  getAddresses(userId) {
    const httpOptions = {
      params: new HttpParams().set('q', JSON.stringify({ user_id: userId }))
    };
    return this.api.get(`${this.API_URL}user_addresses`, httpOptions).pipe(map(response => response['data']));
  }
}

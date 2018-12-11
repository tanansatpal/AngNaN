import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

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
}

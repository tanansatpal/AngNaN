import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonService } from './common.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductSectionService {

  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param api - HTTP service to call the APIS
   * @param commonService - Common service
   * */
  constructor(private api: ApiService, private commonService: CommonService) {
  }

  /**
   * Call the Brands API.
   */
  getBrands(filters = null) {
    return this.api.get(`${this.API_URL}entity/ms.brands`);
  }

  getCollections(filters = null) {
    return this.api.get(`${this.API_URL}entity/ms.collections`, {params: {q: JSON.stringify(filters)}});
  }

  getProducts(filters = null) {
    return this.api.get(`${this.API_URL}entity/ms.products`, {params: {filters: JSON.stringify(filters)}});
  }

}

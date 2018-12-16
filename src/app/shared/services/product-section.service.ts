import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
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
  getBrands() {
    return this.api.get(`${this.API_URL}brands`);
  }

  getCollections(filters = null) {
    return this.api.get(`${this.API_URL}collections`, {params: {q: JSON.stringify(filters)}});
  }

  getProducts(filters = null, sort = null, start = 0, limit = 12) {
    return this.api.get(`${this.API_URL}products`, {params: {q: JSON.stringify(filters), sort, start, limit}});
  }

  getCategoryDetail(alias) {
    return this.api.get(`${this.API_URL}categories/_/getCategoryDetail`, {params: {q: JSON.stringify({alias})}});
  }

}

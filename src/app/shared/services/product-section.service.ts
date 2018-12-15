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
  getBrands(filters = null) {
    return this.api.get(`${this.API_URL}brands`);
  }

  getCollections(filters = null) {
    return this.api.get(`${this.API_URL}collections`, {params: {filters: JSON.stringify(filters)}});
  }

  getProducts(filters = null) {
    return this.api.get(`${this.API_URL}products`, {params: {filters: JSON.stringify(filters)}});
  }

  getCategoryDetail(id) {
    return this.api.get(`${this.API_URL}categories/${id}`);
  }

}

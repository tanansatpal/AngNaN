import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductSectionService {

  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param http - HTTP service to call the APIS
   * @param commonService - Common service
   * */
  constructor(private http: HttpClient, private commonService: CommonService) {
  }


  /**
   * Call the Brands API.
   * @returns slides - Slides from the response of the API;
   */
  getBrands(filters = null) {
    return this.http.get(`${this.API_URL}entity/ms.brands`, { params: filters })
      .pipe(
        catchError(this.commonService.handleError('getBrands', []))
      );
  }

}

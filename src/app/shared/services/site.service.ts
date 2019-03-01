import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from './api.service';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param api - HTTP service to call the APIS
   * @param commonService - Common service
   * */
  constructor(private api: ApiService, private commonService: CommonService) {}

  /**
   * Call the Slides API.
   * @returns slides - Slides from the response of the A+3PI;
   */
  getSlides() {
    return this.api.get(`${this.API_URL}slides`).pipe(map(response => response['data']));
  }
}

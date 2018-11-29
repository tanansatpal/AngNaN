import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CommonService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param http - HTTP service to call the APIS
   * @param commonService - Common service
   * */
  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  /**
   * Call the Slides API.
   * @returns slides - Slides from the response of the API;
   */
  getSlides() {
    return this.http.get(`${this.API_URL}entity/ms.slides`)
      .pipe(
        catchError(this.commonService.handleError('getSlides', []))
      );
  }
}

import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from './api.service';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL;

  returnUrl: string;

  /**
   * Creates an instance of AuthService
   * @param platformId - platformId
   * @param api - HTTP service to call the APIS
   * @param store - Store
   * */
  constructor(@Inject(PLATFORM_ID) private platformId: any, private api: ApiService, private store: Store<{ auth }>) {
  }

  /**
   * Store the user in localStorage.
   * @param data - data to be stored;
   * @param keyName - name of the key in which data will be stored;
   */
  private setAuthToken(data: string, keyName: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(keyName, data);
    }
  }

  getAuthToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  /**
   * Call the Login API and store the user in localStorage.
   * @param email - email of the user;
   * @param password - password of the user;
   * @returns user - User from the response of the API;
   */
  login({username, password}) {
    const params = {data: {'username': username, 'password': password}};
    return this.api.post(`${this.API_URL}login`, params)
      .pipe(
        map(user => {
          this.setAuthToken(user.token, 'token');
          return user;
        })
      );
  }
}

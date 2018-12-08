import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '@shared/models/user.model';
import { Store } from '@ngrx/store';
import { LoginSuccess, GetCurrentUserSuccess } from '@app/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param api - HTTP service to call the APIS
   * @param store - Store
   * */
  constructor(private api: ApiService, private store: Store<{ auth }>) {
  }

  /**
   * Store the user in localStorage.
   * @param data - data to be stored;
   * @param keyName - name of the key in which data will be stored;
   */
  private static setAuthToken(data: User, keyName: string): void {
    const jsonData = JSON.stringify(data);
    // todo @AngularUniversalSupport
    localStorage.setItem(keyName, jsonData);
  }

  /**
   * Call the Login API and store the user in localStorage.
   * @param email - email of the user;
   * @param password - password of the user;
   * @returns user - User from the response of the API;
   */
  login({email, password}) {
    const params = {data: {'username': email, 'password': password}};
    return this.api.post(`${this.API_URL}entity/ms.users/_/login`, params)
      .pipe(
        map(user => {
          AuthService.setAuthToken(user, 'user');
          return user;
        })
      );
  }
}

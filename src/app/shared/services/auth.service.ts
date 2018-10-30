import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;

  /**
   * Creates an instance of AuthService
   * @param http - HTTP service to call the APIS
   * */
  constructor(private http: HttpClient) {
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
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Call the Login API and store the user in localStorage.
   * @param email - email of the user;
   * @param password - password of the user;
   * @returns user - User from the response of the API;
   */
  login({ email, password }) {
    const params = { data: { 'email': email, 'password': password } };
    this.http.post<User>(`${this.API_URL}/api/1/entity/ms.users/_/login`, params)
      .pipe(
        map(user => {
          AuthService.setAuthToken(user, 'user');
          return user;
        }),
        catchError(this.handleError('getHeroes', []))
      );
  }
}

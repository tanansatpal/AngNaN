import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Creates an instance of ApiService
   * @param http - HTTP service to call the APIS
   * */
  constructor(private http: HttpClient) {
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  get(url, options = {}) {
    return this.http.get(url, options)
      .pipe(
        map(response => response['data']),
        catchError(this.handleError('url', []))
      );
  }

  post(url, data, httpOptions = {}) {
    return this.http.post(url, data, httpOptions)
      .pipe(
        map(response => response['data']),
        catchError(this.handleError('url', []))
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

import { orderResponse } from './mockdata/orders';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

        // get orders by user
        if (request.url.match(/\/api\/1\/entity\/ms.orders$/) && request.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({ status: 200, body: orderResponse }));
          } else {
            // return 401 not authorised if token is null or invalid
            return throwError('Unauthorised');
          }
        }

        // pass through any requests not handled above
        return next.handle(request);

      })

      // call materialize and dematerialize to ensure delay even if an error is thrown
      // (https://github.com/Reactive-Extensions/RxJS/issues/648)
      , materialize(), delay(500), dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

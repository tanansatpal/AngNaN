import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import {
  brandsResponse,
  collectionsResponse,
  orderResponse,
  productsResponse,
  slidesResponse,
  usersResponse,
  categoriesResponse
} from './mockdata';

const applyFilters = function (request, data) {
  const newData = JSON.parse(JSON.stringify(data));
  let filters = request.params.get('filters');
  if (!filters) {
    return newData;
  }
  filters = JSON.parse(filters);
  const allRecords = newData.data;
  newData.data = allRecords.filter(record => {
    let addRecord = true;
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        if (record[key] && Array.isArray(record[key])) {
          if (!record[key].includes(filters[key])) {
            addRecord = false;
            break;
          }
        } else if (record[key] !== filters[key]) {
          addRecord = false;
          break;
        }
      }
    }
    return addRecord;
  });
  return newData;
};

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

        // get slides
        if (request.url.match(/\/api\/v1\/slides$/) && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: applyFilters(request, slidesResponse)}));
        }

        // get brands
        if (request.url.match(/\/api\/v1\/brands$/) && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: applyFilters(request, brandsResponse)}));
        }

        // get collections
        if (request.url.match(/\/api\/v1\/collections$/) && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: applyFilters(request, collectionsResponse)}));
        }

        // get products
        if (request.url.match(/\/api\/v1\/products$/) && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: applyFilters(request, productsResponse)}));
        }

        // get products
        if (request.url.match(/\/api\/v1\/categories\/\w+$/) && request.method === 'GET') {
          const categoryAlias = request.url.match(/\/api\/v1\/categories\/(\w+)$/)[1];
          const category = categoriesResponse.data.find(o => o.alias === categoryAlias);
          const data = JSON.parse(JSON.stringify(category));
          return of(new HttpResponse({status: 200, body: {data}}));
        }

        if (request.url.endsWith('/v1/login') && request.method === 'POST') {
          // find if any user matches login credentials
          const users = usersResponse.data;
          const filteredUser = users.filter(user => {
            return user.email === request.body.data.username && user.password === request.body.data.password;
          }).shift();

          if (filteredUser) {
            // if login details are valid return 200 OK with user details and fake jwt token
            const body = {
              id: filteredUser._id,
              email: filteredUser.email,
              firstName: filteredUser.first_name,
              lastName: filteredUser.last_name,
              currency: {'name': 'INR', 'conversion_rate': 1, 'decimal_points': 0},
              language: 'EN',
              role: 'member',
              token: 'fake-jwt-token'
            };

            return of(new HttpResponse({status: 200, body: {data: body}}));
          } else {
            // else return 400 bad request
            return throwError('Username or password is incorrect');
          }
        }

        // get orders by user
        if (request.url.match(/\/api\/v1\/orders$/) && request.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({status: 200, body: orderResponse}));
          } else {
            // return 401 not authorised if token is null or invalid
            return throwError('Unauthorised');
          }
        }

        // get orders by user
        if (request.url.match(/\/api\/v1\/orders\/count$/) && request.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({status: 200, body: {data: orderResponse.data.length}}));
          } else {
            // return 401 not authorised if token is null or invalid
            return throwError('Unauthorised');
          }
        }

        // get order
        if (request.url.match(/\/api\/v1\/orders\/\w+$/) && request.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            const orderId = request.url.match(/\/api\/v1\/orders\/(\w+)$/)[1];
            const order = orderResponse.data.find(o => o._id === orderId);
            const data = JSON.parse(JSON.stringify(order));
            return of(new HttpResponse({status: 200, body: {data}}));
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

import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GetOrder, GetSelectedSection, UserActionTypes } from '../actions/user.actions';
import { UserService } from '@shared/services';
import { getCurrentOrder } from '@app/user/reducers/selectors';

@Injectable()
export class UserEffects {

  @Effect()
  getOrder$: Observable<Action> = this.actions$.pipe(
    ofType<GetOrder>(UserActionTypes.GET_ORDER),
    mergeMap(action => {
      return this.userService.getOrder(action.payload).pipe(
        map(data => ({type: UserActionTypes.GET_ORDER_SUCCESS, payload: data})),
        catchError(() => of({type: UserActionTypes.GET_ORDER_FAILED}))
      );
    })
  );

  @Effect()
  getSelectedSection$: Observable<Action> = this.actions$.pipe(
    ofType<GetSelectedSection>(UserActionTypes.GET_SELECTED_SECTION),
    mergeMap(action => {
      if (action.payload.match(/\/user\/orders\/\w+$/)) {
        return this.store.pipe(select(getCurrentOrder), map(order => ({
          type: UserActionTypes.SET_SELECTED_SECTION,
          payload: {
            url: `/user/orders/${order && order._id}`,
            title: `Order #${order && order.order_id}`,
            icon: '',
            description: `Order #${order && order.order_id} was placed on <strong>${order && order.created_on}</strong>
                  and is currently <strong> ${order && order.status}</strong>.`,
          }
        })));
      } else {
        const sidebarSections = [
          {
            url: '/user/orders',
            title: 'Orders',
            description: 'Your orders in one place.',
            icon: '#paper-bag-1',
          },
          {
            url: '/user/profile',
            title: 'Profile',
            description: `Maecenas sollicitudin. In rutrum. In convallis.
            Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec,
            pretium sit amet, tempor quis. Fusce dui leo, imperdiet in.`,
            icon: '#male-user-1'
          },
          {
            url: '/user/address',
            title: 'Addresses',
            icon: '#navigation-map-1'
          }
        ];
        const selectedSection = sidebarSections.filter(section => section.url === action.payload).shift();
        selectedSection.title = `Your ${selectedSection.title}`;
        return of({
          type: UserActionTypes.SET_SELECTED_SECTION,
          payload: selectedSection
        });
      }
    })
  );


  constructor(private actions$: Actions, private userService: UserService, private store: Store<{ user }>) {
  }
}

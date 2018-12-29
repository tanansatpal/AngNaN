import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { GetCurrentCart } from '@app/cart/actions/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngNaN';

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new GetCurrentCart());
    // ------------------------------------------------------- //
    //   Scroll to top button
    // ------------------------------------------------------ //

    /* $(window).on('scroll', function () {
       if ($(window).scrollTop() >= 1500) {
         $('#scrollTop').fadeIn();
       } else {
         $('#scrollTop').fadeOut();
       }
     });


     $('#scrollTop').on('click', function () {
       $('html, body').animate({
         scrollTop: 0
       }, 1000);
     });*/
  }
}

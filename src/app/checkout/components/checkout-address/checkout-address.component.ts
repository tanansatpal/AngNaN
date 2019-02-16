import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

}

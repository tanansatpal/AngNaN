import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  userAddresses$;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userAddresses$ = this.userService.getAddresses('5c73f85cc4f47113d379b8cc');
  }
}

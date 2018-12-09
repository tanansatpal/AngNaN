import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordForm: FormGroup;
  profileForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.passwordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });

    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      DOB: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  updatePassword() {
    console.warn(this.passwordForm.value);
  }
}

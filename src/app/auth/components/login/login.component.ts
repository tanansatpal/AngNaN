import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { select, Store } from '@ngrx/store';
import { Login } from '@app/auth/actions/auth.actions';
import { getAuthStatus } from '../../reducers/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  returnUrl: string;
  status$: Subscription;

  constructor(private auth: AuthService, private router: Router, private store: Store<{ auth }>) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.returnUrl = this.auth.returnUrl || '/';
  }

  redirectIfUserLoggedIn() {
    this.status$ = this.store.pipe(select(getAuthStatus)).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        return this.router.navigateByUrl(this.returnUrl);
      }
    });
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.loginForm.controls[ctrl_name].setErrors({ msg: msg });
  }

  validate() {
    const values = this.loginForm.value;
    const keys = Object.keys(values);
    keys.forEach(val => {
      const ctrl = this.loginForm.controls[val];
      if (!ctrl.valid) {
        this.pushErrorFor(val, null);
        ctrl.markAsTouched();
      }
    });
    return this.loginForm.valid;
  }

  login() {
    const formValid = this.validate();
    if (!formValid) {
      return false;
    }
    this.store.dispatch(new Login(this.loginForm.value));
  }

  ngOnDestroy() {
    if (this.status$) {
      this.status$.unsubscribe();
    }
  }
}

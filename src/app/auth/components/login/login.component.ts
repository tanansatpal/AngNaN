import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';
import { Store } from '@ngrx/store';
import { Login } from '@app/auth/actions/auth.actions';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  returnUrl: string;
  $loginSubs: Subscription;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private store: Store<{ auth }>) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  redirectIfUserLoggedIn() {
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.loginForm.controls[ctrl_name].setErrors({'msg': msg});
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
    this.$loginSubs = this.auth
      .login(this.loginForm.value).pipe(
        tap(() => this.router.navigate([this.returnUrl]), err => {
          console.error(err);
        })).subscribe();
  }

  ngOnDestroy() {
    if (this.$loginSubs) {
      this.$loginSubs.unsubscribe();
    }
  }
}

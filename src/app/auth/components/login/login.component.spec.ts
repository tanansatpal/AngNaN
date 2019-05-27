import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromFeature from '@app/auth/reducers/auth.reducer';
import { Router, RouterModule } from '@angular/router';
import { AuthState } from '@app/auth/reducers/auth.state';
import { Login } from '@app/auth/actions/auth.actions';
import { AppReducer } from '@app/app.reducer';
import * as Selectors from '@app/auth/reducers/selectors';
import { AuthService } from '@shared/services';
import { of } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@app/auth/reducers/auth.effects';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<AuthState>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const authSpy = jasmine.createSpyObj('AuthService', ['login']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...AppReducer,
          auth: fromFeature.AuthReducer
        }),
        EffectsModule.forRoot([AuthEffects])
      ],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: routerSpy }, { provide: AuthService, useValue: authSpy }]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    spyOn(Selectors, 'getAuthStatus').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login function', () => {
    const action = new Login({ username: 'test', password: 'test' });
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('test');
    authSpy.login.and.returnValue(of({ email: 'test@test.com', first_name: 'Test', last_name: 'test' }));
    component.login();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(authSpy.login).toHaveBeenCalled();
    expect(Selectors.getAuthStatus).toHaveBeenCalled();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
  });
  it('should not call login', () => {
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('');
    component.login();
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
  it('should call login', () => {
    const loginElement: HTMLElement = fixture.nativeElement;
    const loginForm = loginElement.querySelector('form');
    (<HTMLInputElement>loginElement.querySelector('#email')).value = 'test@test.com';
    loginElement.querySelector('#email').dispatchEvent(new Event('input'));
    expect(component.loginForm.controls['username'].value).toBe('test@test.com');
    (<HTMLInputElement>loginElement.querySelector('#password')).value = 'test';
    loginElement.querySelector('#password').dispatchEvent(new Event('input'));
    expect(component.loginForm.controls['password'].value).toBe('test');
    authSpy.login.and.returnValue(of({ email: 'test@test.com', first_name: 'Test', last_name: 'test' }));
    loginForm.submit();
    loginForm.dispatchEvent(new Event('submit'));
    const action = new Login({ username: 'test@test.com', password: 'test' });
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(authSpy.login).toHaveBeenCalled();
    expect(Selectors.getAuthStatus).toHaveBeenCalled();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
  });
});

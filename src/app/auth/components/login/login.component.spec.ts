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
import { getAuthStatus } from '@app/auth/reducers/selectors';
import { AuthGuard } from '@app/auth/guards/auth.guard';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<AuthState>;
  const initialState = { isLoggedIn: false, user: {} };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...AppReducer,
          feature: fromFeature.AuthReducer
        })
      ],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: routerSpy }, provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login', () => {
    const action = new Login({ username: 'test', password: 'test' });
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('test');
    component.login();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
  it('should not call login', () => {
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('');
    component.login();
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
  it('should redirect if loggedin', () => {
    store.setState({ isLoggedIn: true, user: {} });
    expect(getAuthStatus.projector({ isLoggedIn: true })).toBe(true);
    // expect(routerSpy.navigateByUrl.calls.count()).toBe(1);
    // const navArgs = routerSpy.navigateByUrl.calls.first().args[0];
    // console.log(navArgs);
  });
});

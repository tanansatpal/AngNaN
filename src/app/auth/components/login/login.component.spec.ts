import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromFeature from '@app/auth/reducers/auth.reducer';
import { RouterModule } from '@angular/router';
import { AuthState } from '@app/auth/reducers/auth.state';
import { Login } from '@app/auth/actions/auth.actions';
import { AppReducer } from '@app/app.reducer';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<AuthState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...AppReducer,
          feature: fromFeature.AuthReducer
        }),
        RouterModule.forRoot([])
      ],
      declarations: [LoginComponent]
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
});

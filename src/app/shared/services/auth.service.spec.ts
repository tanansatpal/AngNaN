import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from '@app/auth/reducers/auth.reducer';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  const loginSpy = jasmine.createSpyObj('AuthService', ['login']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(AuthReducer)],
      providers: [{ provide: AuthService, useValue: loginSpy }]
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    const user = { username: 'kucano@travala10.com', password: 'password' };
    const stubValue = of({ ...user, first_name: 'Oliver', last_name: 'Queen' });
    loginSpy.login.and.returnValue(stubValue);
    service.login(user).subscribe(response => {
      expect(response.first_name).toBe('Oliver');
      expect(response.last_name).toBe('Queen');
      expect(service.login.calls.count()).toBe(1);
    });
  });
});

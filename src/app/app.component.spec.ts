import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppReducer } from '@app/app.reducer';
import { AppState } from '@app/app.state';
import { GetCurrentCart } from '@app/cart/actions/cart.actions';
import { Component } from '@angular/core';
import { Authorize } from '@app/auth/actions/auth.actions';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>, component: AppComponent;
  let store: Store<AppState>;

  @Component({ selector: 'app-header', template: '' })
  class HeaderStubComponent {}

  @Component({ selector: 'app-footer', template: '' })
  class FooterStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(AppReducer)],
      declarations: [AppComponent, HeaderStubComponent, FooterStubComponent]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should get the current cart`, () => {
    fixture.detectChanges();
    const action = new GetCurrentCart();
    const authAction = new Authorize();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledWith(authAction);
  });
});

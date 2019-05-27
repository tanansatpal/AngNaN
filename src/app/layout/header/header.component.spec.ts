import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../../testing/router-link-directive-stub';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImagePipe } from '@shared/pipes/image.pipe';
import { Store, StoreModule } from '@ngrx/store';
import { AppReducer } from '@app/app.reducer';
import { AppState } from '@app/app.state';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let linkDes, routerLinks;
  let store: Store<AppState>;

  @Component({ selector: 'app-icons', template: '' })
  class AppIconsStubComponent {}

  class MockRouter {
    public url = '/';
    public ne = new NavigationEnd(0, '/', '/');
    public events = new Observable(observer => {
      observer.next(this.ne);
      observer.complete();
    });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, StoreModule.forRoot(AppReducer)],
      declarations: [HeaderComponent, AppIconsStubComponent, RouterLinkDirectiveStub, ImagePipe],
      providers: [{ provide: Router, useClass: MockRouter }]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check links', () => {
    expect(component).toBeTruthy();
    expect(routerLinks[0].linkParams).toBe('/');
  });
  it('can click link in template', () => {
    const homeLinkDe = linkDes[0]; // heroes link DebugElement
    const homeLink = routerLinks[0];

    expect(homeLink.navigatedTo).toBeNull('should not have navigated yet');
    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(homeLink.navigatedTo).toBe('/');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFiltersComponent } from './radio-filters.component';

describe('RadioFiltersComponent', () => {
  let component: RadioFiltersComponent;
  let fixture: ComponentFixture<RadioFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

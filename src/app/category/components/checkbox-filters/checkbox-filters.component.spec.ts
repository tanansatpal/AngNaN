import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFiltersComponent } from './checkbox-filters.component';

describe('CheckboxFiltersComponent', () => {
  let component: CheckboxFiltersComponent;
  let fixture: ComponentFixture<CheckboxFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

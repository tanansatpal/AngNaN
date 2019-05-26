import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiService', () => {
  const getSpy = jasmine.createSpyObj('ApiService', ['get']);
  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: getSpy }]
    });
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get', () => {
    const getStub = of({ data: 'test' });
    getSpy.get.and.returnValue(getStub);
    service.get('test').subscribe(response => {
      expect(response['data']).toBe('test');
      expect(service.get['calls'].count()).toBe(1);
    });
  });
});

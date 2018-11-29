import { TestBed } from '@angular/core/testing';

import { ProductSectionService } from './product-section.service';

describe('ProductSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSectionService = TestBed.get(ProductSectionService);
    expect(service).toBeTruthy();
  });
});

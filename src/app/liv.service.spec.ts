import { TestBed } from '@angular/core/testing';

import { LivService } from './liv.service';

describe('LivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivService = TestBed.get(LivService);
    expect(service).toBeTruthy();
  });
});

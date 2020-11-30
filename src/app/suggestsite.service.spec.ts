import { TestBed } from '@angular/core/testing';

import { SuggestsiteService } from './suggestsite.service';

describe('SuggestsiteService', () => {
  let service: SuggestsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

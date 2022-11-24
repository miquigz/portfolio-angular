import { TestBed } from '@angular/core/testing';

import { SvgsService } from './svgs.service';

describe('SvgsService', () => {
  let service: SvgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

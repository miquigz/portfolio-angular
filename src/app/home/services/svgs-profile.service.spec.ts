import { TestBed } from '@angular/core/testing';

import { SvgsProfileService } from './svgs-profile.service';

describe('SvgsProfileService', () => {
  let service: SvgsProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgsProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

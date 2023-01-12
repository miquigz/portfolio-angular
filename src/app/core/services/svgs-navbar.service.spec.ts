import { TestBed } from '@angular/core/testing';

import { SvgsNavbarService } from './svgs-navbar.service';

describe('SvgsService', () => {
  let service: SvgsNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgsNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

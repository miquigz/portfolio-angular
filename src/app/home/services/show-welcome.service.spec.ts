import { TestBed } from '@angular/core/testing';

import { ShowWelcomeService } from './show-welcome.service';

describe('ShowWelcomeService', () => {
  let service: ShowWelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowWelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

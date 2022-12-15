import { TESTING_PROVIDERS } from './../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { SendMailService } from './send-mail.service';

describe('SendMailService', () => {
  let service: SendMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: TESTING_PROVIDERS
    });
    service = TestBed.inject(SendMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

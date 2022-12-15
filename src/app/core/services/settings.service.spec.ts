import { TESTING_PROVIDERS } from './../../spec/constants';
import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: TESTING_PROVIDERS
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a variable type Subject called "darkModeObservablePrivate"', ()=>{
    expect(service.darkModeObservable);
  });

});

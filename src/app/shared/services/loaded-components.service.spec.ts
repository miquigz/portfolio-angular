import { TestBed } from '@angular/core/testing';

import { LoadedComponentsService } from './loaded-components.service';

describe('LoadedComponentsService', () => {
  let service: LoadedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

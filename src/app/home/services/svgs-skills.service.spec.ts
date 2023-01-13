import { TestBed } from '@angular/core/testing';

import { SvgsSkillsService } from './svgs-skills.service';

describe('SvgsSkillsService', () => {
  let service: SvgsSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgsSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

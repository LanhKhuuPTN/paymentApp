import { TestBed } from '@angular/core/testing';

import { ManageTeamService } from './manage-team.service';

describe('ManageTeamService', () => {
  let service: ManageTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

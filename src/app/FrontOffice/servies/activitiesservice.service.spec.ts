import { TestBed } from '@angular/core/testing';

import { ActivitiesserviceService } from './activitiesservice.service';

describe('ActivitiesserviceService', () => {
  let service: ActivitiesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

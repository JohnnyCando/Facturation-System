import {TestBed} from '@angular/core/testing';

import {ReservationsRequestService} from './reservations-request.service';

describe('ReservationsRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationsRequestService = TestBed.get(ReservationsRequestService);
    expect(service).toBeTruthy();
  });
});

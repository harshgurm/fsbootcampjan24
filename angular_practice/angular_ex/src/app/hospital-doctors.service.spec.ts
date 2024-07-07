import { TestBed } from '@angular/core/testing';

import { HospitalDoctorsService } from './hospital-doctors.service';

describe('HospitalDoctorsService', () => {
  let service: HospitalDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

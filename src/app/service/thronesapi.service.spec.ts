import { TestBed } from '@angular/core/testing';

import { ThronesapiService } from './thronesapi.service';

describe('ThronesapiService', () => {
  let service: ThronesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThronesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

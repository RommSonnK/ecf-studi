import {TestBed} from '@angular/core/testing';

import {OpenedService} from './opened.service';

describe('OpenedService', () => {
  let service: OpenedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

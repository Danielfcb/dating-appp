/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Error.intercepterService } from './error.intercepter.service';

describe('Service: Error.intercepter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Error.intercepterService]
    });
  });

  it('should ...', inject([Error.intercepterService], (service: Error.intercepterService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import { GwentapiService } from './gwentapi.service';
import GwentAPI from 'gwent-api-client';

describe('GwentapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GwentapiService]
    });
  });

  it('should be created', inject([GwentapiService], (service: GwentapiService) => {
    expect(service).toBeTruthy();
  }));
});

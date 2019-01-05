import { TestBed, inject } from '@angular/core/testing';

import { QbuilderService } from './qbuilder.service';

describe('QbuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QbuilderService]
    });
  });

  it('should be created', inject([QbuilderService], (service: QbuilderService) => {
    expect(service).toBeTruthy();
  }));
});

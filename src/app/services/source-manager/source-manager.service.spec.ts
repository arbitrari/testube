import { TestBed } from '@angular/core/testing';

import { SourceManagerService } from './source-manager.service';

describe('SourceManagerService', () => {
  let service: SourceManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

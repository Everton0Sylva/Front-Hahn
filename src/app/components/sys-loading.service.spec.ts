import { TestBed } from '@angular/core/testing';

import { SysLoadingService } from './sys-loading.service';

describe('SysLoadingService', () => {
  let service: SysLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

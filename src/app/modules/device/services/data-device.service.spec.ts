import { TestBed } from '@angular/core/testing';

import { DataDeviceService } from './data-device.service';

describe('DataDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDeviceService = TestBed.get(DataDeviceService);
    expect(service).toBeTruthy();
  });
});

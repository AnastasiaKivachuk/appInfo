import { TestBed } from '@angular/core/testing';

import { DataOrganizationService } from './data-organization.service';

describe('DataOrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataOrganizationService = TestBed.get(DataOrganizationService);
    expect(service).toBeTruthy();
  });
});

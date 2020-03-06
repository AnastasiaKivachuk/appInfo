import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {DataOrganizationService} from './data-organization.service';
import {fromData} from '../store/reducers';

describe('ORGANIZATION DataOrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      ToastrModule.forRoot(),
      StoreModule.forRoot({
        storeDataOrganization: fromData.reducer
      }),
    ]
  }));

  it('should be created', () => {
    const service: DataOrganizationService = TestBed.get(DataOrganizationService);
    expect(service).toBeTruthy();
  });
});


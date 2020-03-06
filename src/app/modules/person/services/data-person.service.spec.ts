import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {DataPersonService} from './data-person.service';
import {fromDataPerson} from '../store/reducers';

describe('PERSON DataPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      ToastrModule.forRoot(),
      StoreModule.forRoot({
        storeDataPerson: fromDataPerson.reducer
      }),
    ],
  }));

  it('should be created', () => {
    const service: DataPersonService = TestBed.get(DataPersonService);
    expect(service).toBeTruthy();
  });
});

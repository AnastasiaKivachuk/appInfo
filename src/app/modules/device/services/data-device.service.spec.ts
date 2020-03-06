import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import { DataDeviceService } from './data-device.service';
import {fromData} from '../store/reducers';

describe('DEVICE DataDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
           ToastrModule.forRoot(),
      StoreModule.forRoot({
        storeData: fromData.reducer
      }),
    ],
 }));

  it('should be created', () => {
    const service: DataDeviceService = TestBed.get(DataDeviceService);
    expect(service).toBeTruthy();
  });
});

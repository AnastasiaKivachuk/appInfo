import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule, MatIconModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {TableDeviceComponent} from './table-device.component';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';
import {fromData} from '../../store/reducers';
import {LineComponent} from './line';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';

describe('DEVICE TableDeviceComponent', () => {
  let component: TableDeviceComponent;
  let fixture: ComponentFixture<TableDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableDeviceComponent, DialogWindowComponent, LineComponent, ButtonWithSpinnerComponent, SpinnerForButtonComponent],
      imports: [MatIconModule, MatProgressSpinnerModule, MatPaginatorModule, MatListModule,
        HttpClientTestingModule, MatCardModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        StoreModule.forRoot({
          storeData: fromData.reducer
        }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

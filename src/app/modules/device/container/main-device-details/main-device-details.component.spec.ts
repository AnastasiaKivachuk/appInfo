import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {MainDeviceDetailsComponent} from './main-device-details.component';
import {DetailsComponent} from '../../components/details';
import {fromData} from '../../store/reducers';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';

describe('DEVICE MainDeviceDetailsComponent', () => {
  let component: MainDeviceDetailsComponent;
  let fixture: ComponentFixture<MainDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainDeviceDetailsComponent, DetailsComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent, DialogWindowComponent],
      imports: [MatProgressSpinnerModule, MatInputModule, MatFormFieldModule,
        MatCardModule, MatDatepickerModule, MatCheckboxModule, MatListModule, MatIconModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ToastrModule.forRoot(),
        MatNativeDateModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          storeData: fromData.reducer
        }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

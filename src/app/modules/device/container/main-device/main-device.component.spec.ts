import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainDeviceComponent} from './main-device.component';
import {FormComponent} from '../../components/form';
import {LineComponent, TableDeviceComponent} from '../../components/table-device';
import {fromData} from '../../store/reducers';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';


describe('DEVICE MainDeviceComponent', () => {
  let component: MainDeviceComponent;
  let fixture: ComponentFixture<MainDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainDeviceComponent, LineComponent, FormComponent, TableDeviceComponent,
        ButtonWithSpinnerComponent, SpinnerForButtonComponent, DialogWindowComponent],
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
    fixture = TestBed.createComponent(MainDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

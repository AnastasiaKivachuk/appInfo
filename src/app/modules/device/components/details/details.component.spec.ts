import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule
} from '@angular/material';

import {DetailsComponent} from './details.component';
import {fromData} from '../../store/reducers';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DetailsDeviceModel} from '../../models';

describe('DEVICE DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const data: DetailsDeviceModel = {
    id: 12,
    name: 'sss',
    serialNumber: 'sds23445',
    organizationNumber: '34',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, ButtonWithSpinnerComponent, SpinnerForButtonComponent],
      imports: [MatCardModule, MatProgressSpinnerModule, MatInputModule, MatDatepickerModule, MatCheckboxModule,
        MatFormFieldModule,
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
      providers: [
        {provide: FormBuilder, useValue: formBuilder}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.initForm(data);
  }));

  it('form component defined', () => {
    expect(component).toBeDefined();
  });

  it('form invalid when empty', () => {
    expect(component.updateForm.valid).toBeTruthy();
  });

  it('field dateStart validity when empty', () => {
    const name = component.updateForm.controls['name'.toString()];
    const errors = name.errors || {};
    expect(errors['required'.toString()]).toBeFalsy();
  });

  it('field dateEnd validity when empty', () => {
    const serialNumber = component.updateForm.controls['serialNumber'.toString()];
    const errors = serialNumber.errors || {};
    expect(errors['required'.toString()]).toBeFalsy();
  });
});

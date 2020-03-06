import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

import {FormComponent} from './form.component';
import {SpinnerForButtonComponent, ButtonWithSpinnerComponent} from '../../../shared/index';
import {fromData} from '../../store';


describe('DEVICE FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, ButtonWithSpinnerComponent, SpinnerForButtonComponent],
      imports: [MatInputModule, MatDatepickerModule, MatCheckboxModule,
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
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.initForm();
  }));

  it('form component defined', () => {
    expect(component).toBeDefined();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('field name validity when empty', () => {
    const name = component.myForm.controls.name;
    const errors = name.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field serialNumber validity when empty', () => {
    const serialNumber = component.myForm.controls.serialNumber;
    const errors = serialNumber.errors || {};
    expect(errors.required).toBeTruthy();
  });
});


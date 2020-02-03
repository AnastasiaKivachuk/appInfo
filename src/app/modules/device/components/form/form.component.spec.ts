import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import {FormComponent} from './form.component';
import {ButtonWithSpinnerComponent} from '../button-with-spinner/button-with-spinner.component';
import {SpinnerForButtonComponent} from '../button-with-spinner/spinner-for-button/spinner-for-button.component';
import {AppState, fromData} from '../../store';
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let store: Store<AppState>;
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
  })

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('field dateStart validity when empty', () => {
    let errors = {};
    const name = component.myForm.controls['name'];
    // name.setValue('1');
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  })
  it('field dateEnd validity when empty', () => {
    let errors = {};
    const serialNumber = component.myForm.controls['serialNumber'];
    // serialNumber.setValue('1');
    errors = serialNumber.errors || {};
    expect(errors['required']).toBeTruthy();
  })
});


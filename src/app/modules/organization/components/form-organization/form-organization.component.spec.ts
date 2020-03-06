import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {FormOrganizationComponent} from './form-organization.component';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {fromData} from '../../store/reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ORGANIZATION FormOrganizationComponent', () => {
  let component: FormOrganizationComponent;
  let fixture: ComponentFixture<FormOrganizationComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormOrganizationComponent, ButtonWithSpinnerComponent, SpinnerForButtonComponent],
      imports: [MatInputModule, MatDatepickerModule, MatCheckboxModule, MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ToastrModule.forRoot(),
        MatNativeDateModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          storeDataOrganization: fromData.reducer
        }),
      ],
      providers: [
        {provide: FormBuilder, useValue: formBuilder}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FormOrganizationComponent);
    component = fixture.componentInstance;
    component.initForm();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formOrganization.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.formOrganization.controls.name.setValue('a');
    component.formOrganization.controls.ownerForm.setValue('a');
    expect(component.formOrganization.valid).toBeTruthy();
  });


  it('field name field validity', () => {
    const name = component.formOrganization.controls.name;
    const errors = name.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field ownerForm validity when empty', () => {
    const ownerForm = component.formOrganization.controls.ownerForm;
    const errors = ownerForm.errors || {};
    expect(errors.required).toBeTruthy();
  });
});


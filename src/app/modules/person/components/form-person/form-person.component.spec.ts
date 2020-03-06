import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {FormPersonComponent} from './form-person.component';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';
import {fromDataPerson} from '../../store/reducers';
import {DataPersonService} from '../../services';

describe('PERSON FormPersonComponent', () => {
  let component: FormPersonComponent;
  let fixture: ComponentFixture<FormPersonComponent>;

  let injector: TestBed;
  let service: DataPersonService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormPersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent],
      imports: [MatProgressSpinnerModule, MatInputModule, MatFormFieldModule,
        MatCardModule, MatDatepickerModule, MatCheckboxModule, MatListModule, MatIconModule,
        MatPaginatorModule, MatSelectModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        MatNativeDateModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          storeDataPerson: fromDataPerson.reducer
        })],
      providers: [DataPersonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(DataPersonService);
    httpMock = injector.get(HttpTestingController);

    fixture = TestBed.createComponent(FormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formPerson.valid).toBeFalsy();
  });

  it('field name field validity', () => {
    const name = component.formPerson.controls.name;
    const errors = name.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field lastName validity when empty', () => {
    const lastName = component.formPerson.controls.lastName;
    const errors = lastName.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field birthDate validity when empty', () => {
    const birthDate = component.formPerson.controls.birthDate;
    const errors = birthDate.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field privateNumber validity when empty', () => {
    const privateNumber = component.formPerson.controls.privateNumber;
    const errors = privateNumber.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field passportSeries validity when empty', () => {
    const passportSeries = component.formPerson.controls.passportSeries;
    const errors = passportSeries.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field passportNumber validity when empty', () => {
    const passportNumber = component.formPerson.controls.passportNumber;
    const errors = passportNumber.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('field organization validity when empty', () => {
    const organizationForm = component.formPerson.controls.organization;
    const errors = organizationForm.errors || {};
    expect(errors.required).toBeTruthy();
  });

});

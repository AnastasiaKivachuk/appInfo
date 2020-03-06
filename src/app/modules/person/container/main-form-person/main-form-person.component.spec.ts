import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {fromDataPerson} from '../../store/reducers';
import {MainFormPersonComponent} from './main-form-person.component';
import {FormPersonComponent} from '../../components/form-person';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';


describe('MainFormPersonComponent', () => {
  let component: MainFormPersonComponent;
  let fixture: ComponentFixture<MainFormPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainFormPersonComponent, FormPersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent, DialogWindowComponent],
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
        })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

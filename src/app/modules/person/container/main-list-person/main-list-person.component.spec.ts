import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListPersonComponent } from './main-list-person.component';
import {LinePersonComponent} from '../../components/list-person/line-person';
import {ListPersonComponent} from '../../components/list-person';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';
import {fromDataPerson} from '../../store/reducers';

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


describe('MainListPersonComponent', () => {
  let component: MainListPersonComponent;
  let fixture: ComponentFixture<MainListPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListPersonComponent, LinePersonComponent, ListPersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent, DialogWindowComponent ],
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
          storeDataPerson: fromDataPerson.reducer
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

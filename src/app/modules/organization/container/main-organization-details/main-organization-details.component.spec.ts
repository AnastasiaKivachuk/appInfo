import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

import { MainOrganizationDetailsComponent } from './main-organization-details.component';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';
import {FormOrganizationComponent} from '../../components/form-organization';
import {fromData} from '../../store/reducers';

describe('ORGANIZATION MainOrganizationDetailsComponent', () => {
  let component: MainOrganizationDetailsComponent;
  let fixture: ComponentFixture<MainOrganizationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOrganizationDetailsComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent, DialogWindowComponent, FormOrganizationComponent ],
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
          storeDataOrganization: fromData.reducer
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

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

import { ListOrganizationComponent } from './list-organization.component';
import {LineOrganizationComponent} from './line-organization';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {fromData} from '../../store/reducers';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';

describe('ORGANIZATION ListOrganizationComponent', () => {
  let component: ListOrganizationComponent;
  let fixture: ComponentFixture<ListOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrganizationComponent, LineOrganizationComponent,
        ButtonWithSpinnerComponent, SpinnerForButtonComponent, DialogWindowComponent ],
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
        })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

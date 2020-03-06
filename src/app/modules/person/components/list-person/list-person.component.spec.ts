import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule, MatIconModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import { ListPersonComponent } from './list-person.component';
import {LinePersonComponent} from './line-person';
import {fromDataPerson} from '../../store/reducers';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {DialogWindowComponent} from '../../../shared/components/dialog-window';

describe('PERSON ListPersonComponent', () => {
  let component: ListPersonComponent;
  let fixture: ComponentFixture<ListPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonComponent, LinePersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent, DialogWindowComponent],
      imports: [MatProgressSpinnerModule, MatListModule,
        MatCardModule, MatPaginatorModule,
        HttpClientTestingModule, MatIconModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        StoreModule.forRoot({
          storeDataPerson: fromDataPerson.reducer
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

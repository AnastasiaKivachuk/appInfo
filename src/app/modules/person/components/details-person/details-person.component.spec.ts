import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import { DetailsPersonComponent } from './details-person.component';
import {fromDataPerson} from '../../store/reducers';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';

describe('PERSON DetailsPersonComponent', () => {
  let component: DetailsPersonComponent;
  let fixture: ComponentFixture<DetailsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent],
      imports: [MatProgressSpinnerModule,
        MatCardModule,
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(DetailsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

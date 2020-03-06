import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatCardModule, MatIconModule, MatListModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {LinePersonComponent} from './line-person.component';
import {fromDataPerson} from '../../../store/reducers';

describe('PERSON LinePersonComponent', () => {
  let component: LinePersonComponent;
  let fixture: ComponentFixture<LinePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinePersonComponent],
      imports: [MatCardModule, MatListModule, MatIconModule,
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
    fixture = TestBed.createComponent(LinePersonComponent);
    component = fixture.componentInstance;
    component.data = {
      name: 'd',
      lastName: 'f',
      birthDate: '12.04.1998',
      organization: [{
        ownerForm: 'OOO',
        name: 'sd'
      }],
      privateNumber: '343434dgrdd',
      passportSeries: 'AA',
      passportNumber: 343454
    };
    component.index = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCardModule, MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import { MainPersonDetailsComponent } from './main-person-details.component';
import {DetailsPersonComponent} from '../../components/details-person';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../../../shared/components/button-with-spinner';
import {fromDataPerson} from '../../store/reducers';

describe('MainPersonDetailsComponent', () => {
  let component: MainPersonDetailsComponent;
  let fixture: ComponentFixture<MainPersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPersonDetailsComponent, DetailsPersonComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent ],
      imports: [MatProgressSpinnerModule,
        MatCardModule, MatIconModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(MainPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatIconModule,
  MatListModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {LineComponent} from './line.component';
import {fromData} from '../../../store/reducers';

describe('DEVICE LineComponent', () => {
  let component: LineComponent;
  let fixture: ComponentFixture<LineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineComponent],
      imports: [MatIconModule, MatListModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        StoreModule.forRoot({
          storeData: fromData.reducer
        }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 12,
      name: 'sss',
      serialNumber: 'sds23445',
      organizationNumber: '34',
    };
    component.index = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

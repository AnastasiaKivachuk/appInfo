import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatIconModule,
  MatListModule,
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';

import {LineOrganizationComponent} from './line-organization.component';
import {fromData} from '../../../store/reducers';

describe('ORGANIZATION LineOrganizationComponent', () => {
  let component: LineOrganizationComponent;
  let fixture: ComponentFixture<LineOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineOrganizationComponent],
      imports: [ MatListModule, MatIconModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot(),
        StoreModule.forRoot({
          storeDataOrganization: fromData.reducer
        }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineOrganizationComponent);
    component = fixture.componentInstance;
    component.data = {ownerForm: 'OOO', name : 'aaa'};
    component.index = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

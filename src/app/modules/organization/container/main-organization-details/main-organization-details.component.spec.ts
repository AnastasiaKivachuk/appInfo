import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOrganizationDetailsComponent } from './main-organization-details.component';

describe('MainOrganizationDetailsComponent', () => {
  let component: MainOrganizationDetailsComponent;
  let fixture: ComponentFixture<MainOrganizationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOrganizationDetailsComponent ]
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

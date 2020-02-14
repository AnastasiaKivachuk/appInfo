import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListOrganizationComponent } from './main-list-organization.component';

describe('MainListOrganizationComponent', () => {
  let component: MainListOrganizationComponent;
  let fixture: ComponentFixture<MainListOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

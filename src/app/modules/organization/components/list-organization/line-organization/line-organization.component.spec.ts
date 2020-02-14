import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOrganizationComponent } from './line-organization.component';

describe('LineOrganizationComponent', () => {
  let component: LineOrganizationComponent;
  let fixture: ComponentFixture<LineOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

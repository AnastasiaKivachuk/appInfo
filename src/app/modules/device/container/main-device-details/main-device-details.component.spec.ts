import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeviceDetailsComponent } from './main-device-details.component';

describe('MainDeviceDetailsComponent', () => {
  let component: MainDeviceDetailsComponent;
  let fixture: ComponentFixture<MainDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

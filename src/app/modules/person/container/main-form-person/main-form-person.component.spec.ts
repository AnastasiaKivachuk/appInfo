import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormPersonComponent } from './main-form-person.component';

describe('MainFormPersonComponent', () => {
  let component: MainFormPersonComponent;
  let fixture: ComponentFixture<MainFormPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFormPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

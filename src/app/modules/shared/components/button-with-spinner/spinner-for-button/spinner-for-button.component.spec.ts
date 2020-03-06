import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerForButtonComponent} from './spinner-for-button.component';

describe('SHARED SpinnerForButtonComponent', () => {
  it('it SpinnerForButtonComponent  defined', () => {
    let component: SpinnerForButtonComponent;
    let fixture: ComponentFixture<SpinnerForButtonComponent>;

    TestBed.configureTestingModule({
      declarations: [SpinnerForButtonComponent]
    });
    fixture = TestBed.createComponent(SpinnerForButtonComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});

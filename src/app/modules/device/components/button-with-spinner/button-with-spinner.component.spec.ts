import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ButtonWithSpinnerComponent} from './button-with-spinner.component';
import {SpinnerForButtonComponent} from './spinner-for-button/spinner-for-button.component';



describe('add ButtonWithSpinnerComponent', () => {
  it('it ButtonWithSpinnerComponent  defined', () => {
    let component: ButtonWithSpinnerComponent;
    let fixture: ComponentFixture<ButtonWithSpinnerComponent>;


    TestBed.configureTestingModule({
      declarations: [ButtonWithSpinnerComponent,
        SpinnerForButtonComponent]
    })
    fixture = TestBed.createComponent(ButtonWithSpinnerComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  })
})

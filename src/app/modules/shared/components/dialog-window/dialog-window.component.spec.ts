import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule, MatIconModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {DialogWindowComponent} from './dialog-window.component';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from '../button-with-spinner';

describe('SHARED DialogWindowComponent', () => {
  let component: DialogWindowComponent;
  let fixture: ComponentFixture<DialogWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogWindowComponent, ButtonWithSpinnerComponent,
        SpinnerForButtonComponent],
      imports: [
        MatCardModule, MatIconModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

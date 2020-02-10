import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-with-spinner',
  templateUrl: './button-with-spinner.component.html',
  styleUrls: ['./button-with-spinner.component.css']
})
export class ButtonWithSpinnerComponent implements OnInit {

  constructor() { }

  @Input() disabled: boolean;
  @Input() showSpinner: boolean;
  @Input() name: string;

  ngOnInit() {
  }

}

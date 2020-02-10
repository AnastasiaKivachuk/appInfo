import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  public nameButton = 'ОК';
  public showSpinner = false;
  @Input() errorMessage: string;

  GetDeleteStatus(state: boolean) {
    this.onChanged.emit(state);
    this.showSpinner = state;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

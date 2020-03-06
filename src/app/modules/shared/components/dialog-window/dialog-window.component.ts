import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();
  public nameButton = 'ОК';
  public showSpinner = false;
  @Input() errorMessage: string;
  @Input() spiner: boolean;

  GetDeleteStatus(state: boolean) {
    this.changed.emit(state);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

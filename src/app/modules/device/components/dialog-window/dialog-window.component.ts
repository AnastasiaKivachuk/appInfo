import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();

  GetDeleteStatus(state: boolean) {
    this.onChanged.emit(state);
  }

  constructor() { }

  ngOnInit() {
  }

}

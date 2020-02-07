import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../store';
import {dataSelectors} from '../../store/selector';
@Component({
  selector: 'app-main-device',
  templateUrl: './main-device.component.html',
  styleUrls: ['./main-device.component.css']
})
export class MainDeviceComponent implements OnInit {
  isFetching: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(dataSelectors.getDataStatus).subscribe(state => this.isFetching = state);
  }


}

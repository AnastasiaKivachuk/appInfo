import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../store';
import {dataSelectors} from '../../store/selector';

@Component({
  selector: 'app-main-device-details',
  templateUrl: './main-device-details.component.html',
  styleUrls: ['./main-device-details.component.css']
})
export class MainDeviceDetailsComponent implements OnInit {
  isFetching: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(dataSelectors.getDataStatus).subscribe(state => this.isFetching = state);
  }
}

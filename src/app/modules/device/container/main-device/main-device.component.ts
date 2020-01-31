import {Component, OnInit} from '@angular/core';
import {dataSelectors} from '../../store/selector';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-main-device',
  templateUrl: './main-device.component.html',
  styleUrls: ['./main-device.component.css']
})
export class MainDeviceComponent implements OnInit {
  isFetching$ = this.store.select(dataSelectors.getDataStatus);
  isFetching: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isFetching$.subscribe(state => this.isFetching = state);
  }


}

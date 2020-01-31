import {Component, OnInit} from '@angular/core';
import {dataSelectors} from '../../store/selector';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-main-device-details',
  templateUrl: './main-device-details.component.html',
  styleUrls: ['./main-device-details.component.css']
})
export class MainDeviceDetailsComponent implements OnInit {
  isFetching$ = this.store.select(dataSelectors.getDataStatus);
  isFetching: boolean;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isFetching$.subscribe(state => this.isFetching = state);
  }
}

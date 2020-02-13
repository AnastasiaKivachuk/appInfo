import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {AppState} from '../../store';
import {dataSelectors} from '../../store/selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-device',
  templateUrl: './main-device.component.html',
  styleUrls: ['./main-device.component.css']
})
export class MainDeviceComponent implements OnInit {
  isFetching$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isFetching$ = store.pipe(select(dataSelectors.getDataStatus));
  }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../../store';
import {dataSelectors} from '../../store/selector';


@Component({
  selector: 'app-main-device',
  templateUrl: './main-device.component.html',
  styleUrls: ['./main-device.component.css']
})
export class MainDeviceComponent implements OnInit {
  isFetching$: Observable<boolean>;
  errorCard$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.isFetching$ = store.pipe(select(dataSelectors.getDataStatus));
    this.errorCard$ = store.pipe(select(dataSelectors.getError));
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {AppState} from '../../../device/store';
import {dataSelectorsPerson} from '../../store/selector';

@Component({
  selector: 'app-main-list-person',
  templateUrl: './main-list-person.component.html',
  styleUrls: ['./main-list-person.component.css']
})
export class MainListPersonComponent implements OnInit {
  isFetching$: Observable<boolean>;
  errorCard$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.errorCard$ = store.pipe(select(dataSelectorsPerson.getError));
    this.isFetching$ = store.pipe(select(dataSelectorsPerson.getDataStatus));
  }

  ngOnInit() {
  }

}

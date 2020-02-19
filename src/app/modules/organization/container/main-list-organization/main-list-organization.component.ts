import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {dataSelectors} from '../../store/selector';
import {AppState} from '../../../device/store';


@Component({
  selector: 'app-main-list-organization',
  templateUrl: './main-list-organization.component.html',
  styleUrls: ['./main-list-organization.component.css']
})
export class MainListOrganizationComponent implements OnInit {
  isFetching$: Observable<boolean>;
  errorCard$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.isFetching$ = store.pipe(select(dataSelectors.getDataStatus));
    this.errorCard$ = store.pipe(select(dataSelectors.getError));
  }

  ngOnInit() {
  }

}

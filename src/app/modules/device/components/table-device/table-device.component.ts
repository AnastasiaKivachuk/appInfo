import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';
import {Observable} from 'rxjs';

import {DataDeviceService} from '../../services';
import {dataActions} from '../../store/action';
import {AppState, dataSelectors} from '../../store';
import {DetailsDeviceModel, PaginatorModel} from '../../models';


@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrls: ['./table-device.component.css']
})
export class TableDeviceComponent implements OnInit {
  public allDevice$: Observable<[DetailsDeviceModel]>;
  public visibility = false;
  public idDevice: number;
  public error: string;
  public spiner: boolean;
  public ObjDataPaginatorProperties$: Observable<PaginatorModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  constructor(
    public service: DataDeviceService,
    private store: Store<AppState>
  ) {
    this.allDevice$ = store.select(dataSelectors.getPageDataDevice);
    this.ObjDataPaginatorProperties$ = store.select(dataSelectors.getDataPaginatorProperties);

  }

  ngOnInit() {
    this.store.dispatch(new dataActions.Fetch());
   }

  onChanged({state, id}) {
    this.visibility = state;
    this.idDevice = id;
  }

  public handlePage(e: any) {
    this.store.dispatch(new dataActions.ChangePropertyOfPaginator({currentPage: e.pageIndex, pageSize: e.pageSize}));
  }

  delete(state, id) {
    this.error = '';
    if (state) {
      this.spiner = true;
      this.service.deleteDevice(id).subscribe(() => {
          this.store.dispatch(new dataActions.DeleteDevice());
          this.service.showSuccess('Device successfully deleted!');
          this.visibility = false;
        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
          this.spiner = false;
        }
      );
      return;
    }
    this.visibility = false;
  }


}

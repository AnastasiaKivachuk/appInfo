import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';

import {DataDeviceService} from '../../services/data-device.service';
import {dataActions} from '../../store/action';
import {AppState, dataSelectors} from '../../store';
import {DetailsDeviceModel} from '../../models';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrls: ['./table-device.component.css']
})
export class TableDeviceComponent implements OnInit {
  public allDevice: [DetailsDeviceModel];
  public visibility = false;
  public idDevice: number;
  public error: string;

  public ObjDataPaginatorProperties: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  constructor(
    public service: DataDeviceService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new dataActions.Fetch());
    this.store.select(dataSelectors.getPageDataDevice).subscribe(data => this.allDevice = data);
    this.store.select(dataSelectors.getError).subscribe(data => this.error = data);
    this.store.select(dataSelectors.getDataPaginatorProperties).subscribe(data => this.ObjDataPaginatorProperties = data);
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
    if (state === true) {
      this.service.deleteDevice(id).subscribe(() => {
          this.store.dispatch(new dataActions.DeleteDevice());
          this.service.showSuccess('Device successfully deleted!');
          this.visibility = false;
        },
        err => {
          {
            this.error = _.get(err, 'error.message', 'some error');
          }
        });
    } else {
      this.visibility = false;
    }
  }


}

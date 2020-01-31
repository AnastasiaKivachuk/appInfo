import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataDeviceService} from '../../services/data-device.service';
import {MatPaginator} from '@angular/material';
import {DataResponse} from '../../models/response';
import {dataActions} from '../../store/action';
import {Store} from '@ngrx/store';
import {AppState, dataSelectors} from '../../store';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrls: ['./table-device.component.css']
})
export class TableDeviceComponent implements OnInit {
  public allDevice: any;
  public getPageDataDevice = this.store.select(dataSelectors.getPageDataDevice);
  // public totalElements = 100;
  // public totalPages = 5;
  public currentPage: number;
  public pageSize: number;
  public visibility = false;
  public stateDelete = false;
  public idDevice: number;
  public DataPaginatorProperties = this.store.select(dataSelectors.getDataPaginatorProperties);
  public ObjDataPaginatorProperties: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
  };
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  onChanged({state, id}) {
    this.visibility = state;
    this.idDevice = id;
    console.log(this.visibility);
    console.log(this.idDevice);
  }

  getDeleteStatus(state) {
    this.stateDelete = state;
    this.visibility = false;
    this.delete(this.stateDelete, this.idDevice);
  }

  constructor(
    public service: DataDeviceService,
    private store: Store<AppState>
  ) {
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    // console.log(this.currentPage);
    this.pageSize = e.pageSize;
    // console.log(this.pageSize);
    console.log({currentPage: this.currentPage, pageSize: this.pageSize});
    this.store.dispatch(new dataActions.ChangePropertyOfPaginator({currentPage: this.currentPage, pageSize: this.pageSize}));

  }

  ngOnInit() {
    this.store.dispatch(new dataActions.Fetch());
    this.getPageDataDevice.subscribe((data) => {
      this.allDevice = data;
    });
    this.DataPaginatorProperties.subscribe((data) => {
      this.ObjDataPaginatorProperties = data;
    });
  }

  delete(state, id) {
    if (state === true) {
      this.service.deleteDevice(id).subscribe(selectedDevice => {
          this.store.dispatch(new dataActions.DeleteDevice());
          this.service.showSuccess('Device successfully deleted!');
        },
        error => {
          this.store.dispatch(new dataActions.Error('some error'));
        });
    }
  }


}

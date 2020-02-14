import {Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {MatPaginator} from '@angular/material';
import {Store} from '@ngrx/store';


import {AppState, dataActions, dataSelectors} from '../../store';
import {DataOrganizationService} from '../../services';
import {OrganizationModel} from '../../models';
@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit {
  public allOrganization: [OrganizationModel];
  public visibility = false;
  public idDevice: number;
  public error: string;
  public spiner: boolean;

  public ObjDataPaginatorProperties: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  constructor(
    public service: DataOrganizationService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new dataActions.Fetch());
    this.store.select(dataSelectors.getPageDataDevice).subscribe(data => this.allOrganization = data);
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
    if (state) {
      this.spiner = true;
      this.service.deleteOrganization(id).subscribe(() => {
          this.store.dispatch(new dataActions.DeleteOrganization());
          this.service.showSuccess('Organization successfully deleted!');
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

import {Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {MatPaginator} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState, dataActions, dataSelectors} from '../../store';
import {DataOrganizationService} from '../../services';
import {OrganizationModel, PaginatorModel} from '../../models';


@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit {
  public allOrganization$: Observable<OrganizationModel[]>;
  public visibility = false;
  public idDevice: number;
  public error: string;
  public spiner: boolean;
  public ObjDataPaginatorProperties$: Observable<PaginatorModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  constructor(
    public service: DataOrganizationService,
    private store: Store<AppState>
  ) {
    this.allOrganization$ = store.pipe(select(dataSelectors.getPageDataDevice));
    this.ObjDataPaginatorProperties$ = store.pipe(select(dataSelectors.getDataPaginatorProperties));
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
    if (!state) {
      return this.visibility = false;
    }
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
  }
}

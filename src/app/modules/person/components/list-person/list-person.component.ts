import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';

import {DataPersonService} from '../../services/data-person.service';
import {AppState, dataActionsPerson, dataSelectorsPerson} from '../../store';
import {Router} from '@angular/router';
import {dataSelectors} from '../../../device/store/selector';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  public allPerson: any;
  public error: string;
  public visibility = false;
  public idPerson: number;
  public ObjDataPaginatorProperties: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
  };
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageEvent: void;

  onChanged({state, id}) {
    this.visibility = state;
    this.idPerson = id;

  }

  // getDeleteStatus(state) {
  //   this.visibility = false;
  //   this.delete(state, this.idPerson);
  // }


  constructor(
    public service: DataPersonService,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  public handlePage(e: any) {
    this.store.dispatch(new dataActionsPerson.ChangePropertyOfPaginator({currentPage: e.pageIndex, pageSize: e.pageSize}));
  }

  ngOnInit() {
    this.store.dispatch(new dataActionsPerson.Fetch());
    this.store.select(dataSelectorsPerson.getPageData).subscribe((data) => {
      this.allPerson = data;
    });
    this.store.select(dataSelectorsPerson.getError).subscribe(data => this.error = data);
    this.store.select(dataSelectorsPerson.getDataPaginatorProperties).subscribe((data) => {
      this.ObjDataPaginatorProperties = data;
    });

  }

  delete(state, id) {
    this.error = '';
    if (state === true) {
      this.service.deletePerson(id).subscribe(() => {
          this.store.dispatch(new dataActionsPerson.DeletePerson());
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

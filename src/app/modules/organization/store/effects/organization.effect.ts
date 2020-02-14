import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';

import * as dataActions from '../action/organization.action';
import {DataOrganizationService} from '../../services';
import {DataResponse} from '../../models';
import {AppState} from '../app.state';
import {getDataPaginatorProperties} from '../selector/organization.selector';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataEffects {
  constructor(private rootService: DataOrganizationService,
              private actions$: Actions,
              private store: Store<AppState>
  ) {
  }

  @Effect()
  changeData$ = this.actions$.pipe(
    ofType(dataActions.CHANGE),
    mapTo(new dataActions.Fetch()),
  );


  @Effect()
  deleteOrganization$ = this.actions$.pipe(
    ofType(dataActions.DELETE),
    mapTo(new dataActions.Fetch()),
  );

  @Effect()
  getData$ = this.actions$.pipe(
    ofType(dataActions.FETCH),
    withLatestFrom(this.store.select(getDataPaginatorProperties)),
    switchMap(([__, {currentPage, pageSize}]) => this.rootService.getAllOrganization(currentPage, pageSize)
      .pipe(
        map((response: DataResponse) => new dataActions.Success(response)),
        catchError((err) => {
          return of(new dataActions.Error(_.get(err, 'error.message', 'some error')));
        })
      )
    ),
  );
}

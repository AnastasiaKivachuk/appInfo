import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';


import {DataPersonService} from '../../services/data-person.service';
import {DataResponse} from '../../models';
import {AppState} from '../app.state';
import {getDataPaginatorProperties} from '../selector/person.selector';
import {dataActionsPerson} from '../action';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataEffectsPerson {
  constructor(private rootService: DataPersonService,
              private actions$: Actions,
              private store: Store<AppState>
  ) {
  }

  @Effect()
  changeData$ = this.actions$.pipe(
    ofType(dataActionsPerson.CHANGE),
    mapTo(new dataActionsPerson.Fetch()),
  );


  @Effect()
  deletePerson$ = this.actions$.pipe(
    ofType(dataActionsPerson.DELETE),
    mapTo(new dataActionsPerson.Fetch()),
  );

  @Effect()
  getData$ = this.actions$.pipe(
    ofType(dataActionsPerson.FETCH),
    withLatestFrom(this.store.select(getDataPaginatorProperties)),
    switchMap(([, {currentPage, pageSize}]) => this.rootService.getAllPerson(currentPage, pageSize)
      .pipe(
        map((response: DataResponse) => {console.log(response); return new dataActionsPerson.Success(response)}),
        catchError((a) => {console.log(a); return of(new dataActionsPerson.Error('some error'))})
      )
    ),
  );
}

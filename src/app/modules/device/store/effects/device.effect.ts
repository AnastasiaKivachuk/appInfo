import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as dataActions from '../action/device.action';
// import {AppState} from '../app.state';
// import {objDate} from '../selector/data.selectors';
import {DataDeviceService} from '../../services/data-device.service';
import {DataResponse, PaginatorModel, DetailsDevice} from '../../models';
import {AppState} from '../app.state';
import {getDataPaginatorProperties} from '../selector/device.selector';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private rootService: DataDeviceService,
  ) {
  }

  @Effect()
  changeData$ = this.actions$.pipe(
    ofType(dataActions.START_END_DATE),
    mapTo(new dataActions.Fetch()),
  );

  @Effect()
  getDataPaginatorProperties$ = this.actions$.pipe(
    ofType(dataActions.FETCH),
    withLatestFrom(this.store.select(getDataPaginatorProperties)),
    switchMap(() => this.rootService.getAllDevice(1, 10)
      .pipe(
        map((response: DataResponse) => {
          console.log(1);
          console.log(response);
          const dataObject = Object.keys(response.content)
      //       // .reduce((data: Data, date: string) =>
      //       //   Object.assign(data, {
      //       //     [date]: response.near_earth_objects[date]
      //       //       .map((asteroid: Asteroid) => {
      //       //         const {id, name} = asteroid;
      //       //         return {id, name};
      //       //       })
      //       //   }), {});
          return new dataActions.Success(dataObject);
        }),
        catchError(() => of(new dataActions.Error('some error')))
      )
    ),
  );
}

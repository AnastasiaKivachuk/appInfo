import {createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromData from '../reducers/person.reducers';
import {State} from '../../models';


export const getState =
  createFeatureSelector<State>('storeDataPerson');

export const getPageData = createSelector(
  getState,
  fromData.getData,
);

export const getDataStatus = createSelector(
  getState,
  fromData.getStatus,
);

export const getDataPaginatorProperties = createSelector(
  getState,
  fromData.getPaginatorProperties,
);

export const getError = createSelector(
  getState,
  fromData.getError,
);

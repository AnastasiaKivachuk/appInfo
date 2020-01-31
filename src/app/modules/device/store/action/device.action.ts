import {Action} from '@ngrx/store';
import {DataResponse} from '../../models';

export const FETCH = '[device] Fetch';
export const ERROR = '[device] Error';
export const SUCCESS = '[device] Success';
export const CHANGE = '[device] ChangePropertyOfPaginator';
export const DELETE = '[device] DeleteDevice';
export const ADD = '[device] AddDevice';

export class Fetch implements Action {
  readonly type = FETCH;
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: DataResponse
  //               {
  //   number: number;
  //   size: number;
  //   currentPage: number;
  //   pageSize: number;
  //   totalPages: number;
  //   totalElements: number;
  //   content: [];
  // }
  ) {
  }
}

export class ChangePropertyOfPaginator implements Action {
  readonly type = CHANGE;

  constructor(public payload: {
    currentPage: number;
    pageSize: number;
  }) {
  }
}

export class DeleteDevice implements Action {
  readonly type = DELETE;

}

export class AddDevice implements Action {
  readonly type = ADD;
  constructor(public payload: {
    content: [];
  }) {
  }
}

export type Actions = Fetch | Error | Success | ChangePropertyOfPaginator | DeleteDevice | AddDevice;
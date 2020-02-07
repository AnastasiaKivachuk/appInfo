import {Action} from '@ngrx/store';

import {DataResponse} from '../../models';

export const FETCH = '[person] Fetch';
export const ERROR = '[person] Error';
export const SUCCESS = '[person] Success';
export const CHANGE = '[person] ChangePropertyOfPaginator';
export const DELETE = '[person] DeleteDevice';
export const ADD = '[person] AddDevice';

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

export class DeletePerson implements Action {
  readonly type = DELETE;

}

export class AddPerson implements Action {
  readonly type = ADD;
  constructor(public payload: {
    content: [];
  }) {
  }
}

export type Actions = Fetch | Error | Success | ChangePropertyOfPaginator | DeletePerson | AddPerson;

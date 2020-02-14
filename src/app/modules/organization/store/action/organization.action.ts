import {Action} from '@ngrx/store';

import {DataResponse, OrganizationModel} from '../../models';

export const FETCH = '[organization] Fetch';
export const ERROR = '[organization] Error';
export const SUCCESS = '[organization] Success';
export const CHANGE = '[organization] ChangePropertyOfPaginator';
export const DELETE = '[organization] DeleteOrganization';
export const ADD = '[organization] AddOrganization';

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

  constructor(public payload: DataResponse) {
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

export class DeleteOrganization implements Action {
  readonly type = DELETE;

}

export class AddOrganization implements Action {
  readonly type = ADD;
  constructor(public payload: {
    content: [OrganizationModel];
  }) {
  }
}

export type Actions = Fetch | Error | Success | ChangePropertyOfPaginator | DeleteOrganization | AddOrganization;

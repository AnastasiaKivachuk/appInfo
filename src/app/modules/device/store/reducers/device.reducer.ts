import {State} from '../../models';
import * as StoreDataAction from '../action/device.action';

const initialState: State = {
    isFetching: false,
    error: '',
    data: null,
    paginator: {
      totalElements: 0,
      totalPages: 0,
      pageSize: 10,
      currentPage: 1
    }
  }
;

export function reducer(state: State = initialState, action: StoreDataAction.Actions) {
  switch (action.type) {
    case StoreDataAction.FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
        data: null,
        paginator: {
          totalElements: 0,
          totalPages: 0,
          pageSize: 10,
          currentPage: 1
        }
      };

    case StoreDataAction.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };


    case StoreDataAction.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        paginator: action.payload
      };

    case StoreDataAction.CHANGE:
      return {
        ...state,
        paginator: {
          ...state.paginator,
          pageSize: action.payload,
          currentPage: action.payload
        }
      };

    case StoreDataAction.ADD:
      return {
        ...state,
        data: state.paginator.currentPage === state.paginator.totalPages && state.data.length < state.paginator.pageSize ? [...state.data, action.payload] : state.data,
        paginator: {
          ...state.paginator,
          pageSize: state.paginator.totalPages * state.paginator.pageSize === state.paginator.totalElements  ? state.paginator.totalPages + 1 : state.paginator.totalPages,
        }
      };

    default:
      return state;
  }
}

export const getData = (state: State) => state.data;
export const getStatus = (state: State) => state.isFetching;
export const getPaginatorProperties = (state: State) => state.paginator;

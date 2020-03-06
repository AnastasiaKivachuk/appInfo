import {State} from '../../models';
import * as StoreDataAction from '../action/device.action';

const initialState: State = {
    isFetching: false,
    error: '',
  content: null,
    paginator: {
      totalElements: 0,
      totalPages: 0,
      pageSize: 10,
      currentPage: 0
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
        content: null
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
        content: action.payload.content,
        paginator: {
          totalElements: action.payload.totalElements,
          totalPages: action.payload.totalPages,
          pageSize: action.payload.size,
          currentPage: action.payload.number
        }
      };

    case StoreDataAction.CHANGE:
      return {
        ...state,
        paginator: {
          ...state.paginator,
          pageSize: action.payload.pageSize,
          currentPage: action.payload.currentPage
        }
      };

    case StoreDataAction.ADD:
      return {
        ...state,
        content:  isLastPage(state) ? [...state.content, action.payload] : state.content,
        paginator: {
          ...state.paginator,
          totalPages:  totalPage(state) ? state.paginator.totalPages + 1 : state.paginator.totalPages,
          totalElements: state.paginator.totalElements + 1,
        }
      };

    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getData = (state: State) => state.content;
export const getStatus = (state: State) => state.isFetching;
export const getPaginatorProperties = (state: State) => state.paginator;

function isLastPage(state) {
  return state.paginator.currentPage === state.paginator.totalPages - 1 && state.content.length < state.paginator.pageSize;
}

function totalPage(state) {
  return state.paginator.totalPages * state.paginator.pageSize === state.paginator.totalElements;
}

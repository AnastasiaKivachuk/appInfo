import {State} from '../../models';
import * as StoreDataPersonAction from '../action/person.action';

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
};

export function reducer(state: State = initialState, action: StoreDataPersonAction.Actions) {
  switch (action.type) {
    case StoreDataPersonAction.FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
        content: null
      };

    case StoreDataPersonAction.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };


    case StoreDataPersonAction.SUCCESS:
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

    case StoreDataPersonAction.CHANGE:
      return {
        ...state,
        paginator: {
          ...state.paginator,
          pageSize: action.payload.pageSize,
          currentPage: action.payload.currentPage
        }
      };

    case StoreDataPersonAction.ADD:
      return {
        ...state,
        // content: state.paginator.currentPage === state.paginator.totalPages - 1 &
        // & state.content.length < state.paginator.pageSize ? [...state.content, action.payload] : state.content,
        // paginator: {
        //   ...state.paginator,
        //   totalPages: state.paginator.totalPages * state.paginator.pageSize ==
        //   = state.paginator.totalElements ? state.paginator.totalPages + 1 : state.paginator.totalPages,
        //   totalElements: state.paginator.totalElements + 1,
        // }
      };

    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getData = (state: State) => state.content;
export const getStatus = (state: State) => state.isFetching;
export const getPaginatorProperties = (state: State) => state.paginator;

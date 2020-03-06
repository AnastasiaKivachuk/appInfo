import {TestBed} from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {dataSelectorsPerson} from './index';

const initialState = {
  storeDataPerson: {
    isFetching: false,
    error: '',
    content: [
      {
        name: 'd',
        lastName: 'f',
        birthDate: '12.04.1998',
        organization: [{
          ownerForm: 'OOO',
          name: 'sd'
        }],
        privateNumber: '343434dgrdd',
        passportSeries: 'AA',
        passportNumber: 343454
      }],
    paginator: {
      totalElements: 18,
      totalPages: 2,
      pageSize: 10,
      currentPage: 0
    }
  }
};
describe('ORGANIZATION Selectors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ],
    });
  });

  it('should work selector getPageDataDevice', () => {
    expect(dataSelectorsPerson.getPageData(initialState)).toBe(initialState.storeDataPerson.content);
  });

  it('should work selector getDataStatus', () => {
    expect(dataSelectorsPerson.getDataStatus(initialState)).toBe(initialState.storeDataPerson.isFetching);
  });

  it('should work selector getDataPaginatorProperties', () => {
    expect(dataSelectorsPerson.getDataPaginatorProperties(initialState)).toBe(initialState.storeDataPerson.paginator);
  });


  it('should work selector getError', () => {
    expect(dataSelectorsPerson.getError(initialState)).toBe(initialState.storeDataPerson.error);
  });
});

import {TestBed} from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {dataSelectors} from './index';

const initialState = {
  storeDataOrganization: {
    isFetching: false,
    error: '',
    content: [
      {
        id: 2,
        name: 'NoteBook',
        ownerForm: 'OOO',
        address: [{
          id: 3,
          country: 'd',
          city: 'd',
          street: 'd',
          streetType: 'd',
          houseNumber: 3,
          entranceNumber: 3,
          apartmentNumber: 2
        }],
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
    expect(dataSelectors.getPageDataDevice(initialState)).toBe(initialState.storeDataOrganization.content);
  });

  it('should work selector getDataStatus', () => {
    expect(dataSelectors.getDataStatus(initialState)).toBe(initialState.storeDataOrganization.isFetching);
  });

  it('should work selector getDataPaginatorProperties', () => {
    expect(dataSelectors.getDataPaginatorProperties(initialState)).toBe(initialState.storeDataOrganization.paginator);
  });


  it('should work selector getError', () => {
    expect(dataSelectors.getError(initialState)).toBe(initialState.storeDataOrganization.error);
  });
});

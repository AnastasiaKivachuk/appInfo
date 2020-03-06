import {TestBed} from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {dataSelectors} from './index';

const initialState = {
  storeData: {
    isFetching: false,
    error: '',
    content: [
      {
        id: 2,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '23-01-2020',
        inUse: true,
        broken: false
      },
      {
        id: 3,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '23-01-2020',
        inUse: true,
        broken: false
      },
      {
        id: 4,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '23-01-2020',
        inUse: false,
        broken: true
      },
      {
        id: 7,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '24-01-2020',
        inUse: false,
        broken: true
      },
      {
        id: 8,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '24-01-2020',
        inUse: false,
        broken: true
      },
      {
        id: 9,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        organizationNumber: 'GH-456780',
        purchaseDate: '24-01-2020',
        inUse: false,
        broken: true
      },
      {
        id: 11,
        name: 'jhnkj',
        serialNumber: '123',
        organizationNumber: '',
        inUse: false,
        broken: false
      },
      {
        id: 14,
        name: 'jhnkj',
        serialNumber: '123',
        inUse: false,
        broken: false
      },
      {
        id: 15,
        name: 'NoteBook',
        serialNumber: '894-kjhg-67j-uuuu',
        inUse: false,
        broken: false
      },
      {
        id: 13,
        name: 'jhnkj',
        serialNumber: '123',
        organizationNumber: '',
        inUse: true,
        broken: false
      }
    ],
    paginator: {
      totalElements: 18,
      totalPages: 2,
      pageSize: 10,
      currentPage: 0
    }
  }
};
describe('DEVICE Selectors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ],
    });
  });

  it('should work selector getPageDataDevice', () => {
    expect(dataSelectors.getPageDataDevice(initialState)).toBe(initialState.storeData.content);
  });

  it('should work selector getDataStatus', () => {
    expect(dataSelectors.getDataStatus(initialState)).toBe(initialState.storeData.isFetching);
  });

  it('should work selector getDataPaginatorProperties', () => {
    expect(dataSelectors.getDataPaginatorProperties(initialState)).toBe(initialState.storeData.paginator);
  });


  it('should work selector getError', () => {
    expect(dataSelectors.getError(initialState)).toBe(initialState.storeData.error);
  });
});

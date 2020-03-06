import {getTestBed, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {DataEffects} from './organization.effect';
import * as dataActions from '../action/organization.action';
import {DataResponse} from '../../models';
import {DataOrganizationService} from '../../services';

describe('ORGANIZATION Effects ', () => {
  let effects: DataEffects;
  let actions: Observable<any>;
  let injector: TestBed;
  let service: jasmine.SpyObj<DataOrganizationService>;
  let httpMock: HttpTestingController;

  const initialState = {
    storeDataOrganization: {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        DataOrganizationService,
        DataEffects,
        provideMockStore({initialState}),
        provideMockActions(() => actions),
        {
          provide: DataOrganizationService,
          useValue: {getAllOrganization: jasmine.createSpy()}
        }
      ],
    });

    effects = TestBed.get(DataEffects);
    injector = getTestBed();
    service = TestBed.get(DataOrganizationService);
    httpMock = TestBed.get(HttpTestingController);
  });
  const dataInf: DataResponse = {
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
    totalElements: 18,
    totalPages: 2,
    size: 10,
    number: 0,
    numberOfElements: 10
  };

  it('should work effect', () => {
    const action = new dataActions.Fetch();
    const completion = new dataActions.Success(dataInf);
    actions = hot('-a', {a: action});
    const response = cold('-a|', {a: dataInf});
    service.getAllOrganization.and.returnValue(response);
    const expected = cold('--b', {b: completion});
    expect(effects.getData$).toBeObservable(expected);
  });

  it('fail effect', () => {
    const dataFromService = new Error('sd');
    const action = new dataActions.Fetch();
    const completion = new dataActions.Error('some error');
    actions = hot('-a', {a: action});
    const response = cold('-#|', {}, dataFromService);
    service.getAllOrganization.and.returnValue(response);
    const expected = cold('--b', {b: completion});
    expect(effects.getData$).toBeObservable(expected);
  });
});

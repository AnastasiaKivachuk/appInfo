import {getTestBed, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold, hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';

import {DataPersonService} from '../../services/data-person.service';
import {DataEffectsPerson} from './person.effect';
import {dataActionsPerson} from '../action';
import {DataResponse} from '../../models';

describe('PERSON Effects', () => {
  let effects: DataEffectsPerson;
  let actions: Observable<any>;
  let injector: TestBed;
  let service: jasmine.SpyObj<DataPersonService>;
  let httpMock: HttpTestingController;

  const initialState = {
    storeDataPerson: {
      isFetching: false,
      error: '',
      data: null,
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
        DataPersonService,
        DataEffectsPerson,
        provideMockStore({initialState}),
        provideMockActions(() => actions),
        {
          provide: DataPersonService,
          useValue: {getAllPerson: jasmine.createSpy()}
        }
      ],
    });

    effects = TestBed.get(DataEffectsPerson);
    injector = getTestBed();
    service = TestBed.get(DataPersonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should work effect', () => {
    const dataInf: DataResponse = {
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
      totalElements: 18,
      totalPages: 2,
      size: 10,
      number: 0,
      numberOfElements: 10
    };

    const action = new dataActionsPerson.Fetch();
    const completion = new dataActionsPerson.Success(dataInf);
    actions = hot('-a', {a: action});
    const response = cold('-a|', {a: dataInf});
    service.getAllPerson.and.returnValue(response);
    const expected = cold('--b', {b: completion});
    expect(effects.getData$).toBeObservable(expected);
  });

  it('fail effect', () => {
    const dataFromService = new Error('sd');
    const action = new dataActionsPerson.Fetch();
    const completion = new dataActionsPerson.Error('some error');
    actions = hot('-a', {a: action});
    const response = cold('-#|', {}, dataFromService);
    service.getAllPerson.and.returnValue(response);
    const expected = cold('--b', {b: completion});
    expect(effects.getData$).toBeObservable(expected);
  });
});


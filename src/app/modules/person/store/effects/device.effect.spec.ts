// import {DataEffects} from './device.effect';
// import {getTestBed, TestBed} from '@angular/core/testing';
// import {provideMockActions} from '@ngrx/effects/testing';
// import {cold, hot} from 'jasmine-marbles';
// import {Observable} from 'rxjs';
// import * as dataActions from '../action/device.action';
// import {RouterTestingModule} from '@angular/router/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {MockStore, provideMockStore} from '@ngrx/store/testing';
// import {DataResponse, State} from '../../models';
// import {DataPersonService} from '../../services/data-person.service';
//
// describe('My Effects', () => {
//   let effects: DataEffects;
//   let actions: Observable<any>;
//   let injector: TestBed;
//   let service: jasmine.SpyObj<DataPersonService>;
//   let httpMock: HttpTestingController;
//   let store: MockStore<{
//     State
//   }>;
//   const initialState = {
//     storeData: {
//       isFetching: false,
//       error: '',
//       data: null,
//       paginator: {
//         totalElements: 0,
//         totalPages: 0,
//         pageSize: 10,
//         currentPage: 0
//       }
//     }
//   };
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule
//       ],
//       providers: [
//         DataPersonService,
//         DataEffects,
//         provideMockStore({initialState}),
//         provideMockActions(() => actions),
//         {
//           provide: DataPersonService,
//           useValue: {getAllDevice: jasmine.createSpy()}
//         }
//       ],
//     });
//
//     effects = TestBed.get(DataEffects);
//     injector = getTestBed();
//     service = TestBed.get(DataPersonService);
//     httpMock = TestBed.get(HttpTestingController);
//   });
//
//   // it('should work effect', () => {
//   //
//   //   const dataFromService: DataResponse = {
//   //     content: [
//   //       {
//   //         id: 2,
//   //         name: 'NoteBook',
//   //         serialNumber: '894-kjhg-67j-uuuu',
//   //         organizationNumber: 'GH-456780',
//   //         purchaseDate: '23-01-2020',
//   //         inUse: true,
//   //         broken: false
//   //       }],
//   //     totalElements: 18,
//   //     totalPages: 2,
//   //     size: 10,
//   //     number: 0,
//   //     numberOfElements: 10
//   //   };
//   //
//   //   const dataInf: DataResponse = {
//   //     content: [
//   //       {
//   //         id: 2,
//   //         name: 'NoteBook',
//   //         serialNumber: '894-kjhg-67j-uuuu',
//   //         organizationNumber: 'GH-456780',
//   //         purchaseDate: '23-01-2020',
//   //         inUse: true,
//   //         broken: false
//   //       }],
//   //     totalElements: 18,
//   //     totalPages: 2,
//   //     size: 10,
//   //     number: 0,
//   //     numberOfElements: 10
//   //   };
//   //
//   //   const action = new dataActions.Fetch();
//   //   const completion = new dataActions.Success(dataInf);
//   //   actions = hot('-a', {a: action});
//   //   const response = cold('-a|', {a: dataFromService});
//   //   service.getAllDevice.and.returnValue(response);
//   //   const expected = cold('--b', {b: completion});
//   //   expect(effects.getData$).toBeObservable(expected);
//   // });
//
//   it('fail effect', () => {
//     const dataFromService = new Error('sd');
//     const action = new dataActions.Fetch();
//     const completion = new dataActions.Error('some error');
//
//     actions = hot('-a', {a: action});
//     const response = cold('-a|', {dataFromService});
//     service.getAllPerson.and.returnValue(response);
//
//     const expected = cold('--b', {b: completion});
//     // console.log(expected);
//     expect(effects.getData$).toBeObservable(expected);
//   });
// });


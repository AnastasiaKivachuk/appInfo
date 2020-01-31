import {DetailsDevice} from './detailsDevice';

export interface DataResponse {
  'content': [DetailsDevice];
  'totalPages': number;
  'totalElements': number;
  'size': number;
  'numberOfElements': number;
}

//               {
//   number: number;
//   size: number;
//   currentPage: number;
//   pageSize: number;
//   totalPages: number;
//   totalElements: number;
//   content: [];
// }

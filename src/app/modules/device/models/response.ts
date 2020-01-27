import {DetailsDevice} from './detailsDevice';

export interface DataResponse {
  'content': [DetailsDevice];
  'totalPages': number;
  'totalElements': number;
  'size': number;
  'numberOfElements': number;
}

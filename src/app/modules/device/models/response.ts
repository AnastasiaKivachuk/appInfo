import {DetailsDevice} from './detailsDevice';

export interface DataResponse {
  number: number;
  content: [DetailsDevice];
  totalPages: number;
  totalElements: number;
  size: number;
  numberOfElements: number;
}


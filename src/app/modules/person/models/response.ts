import {DetailsPersonModel} from './detailsPerson.model';

export interface DataResponse {
  number: number;
  content: DetailsPersonModel[];
  totalPages: number;
  totalElements: number;
  size: number;
  numberOfElements: number;
}


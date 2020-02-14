import {OrganizationModel} from '../../person/models';

export interface DataResponse {
  number: number;
  content: [OrganizationModel];
  totalPages: number;
  totalElements: number;
  size: number;
  numberOfElements: number;
}


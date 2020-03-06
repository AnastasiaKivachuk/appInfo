import {DetailsDeviceModel} from './detailsDevice.model';

export interface DataResponse {
  number: number;
  content: DetailsDeviceModel[];
  totalPages: number;
  totalElements: number;
  size: number;
  numberOfElements: number;
}


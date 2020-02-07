import {DetailsDeviceModel} from './detailsDevice.model';
import {PaginatorModel} from './paginator.model';

export interface State {
  isFetching: boolean;
  error: string;
  content: [DetailsDeviceModel];
  paginator: PaginatorModel;
}

import {DetailsDevice} from './detailsDevice';
import {PaginatorModel} from './paginator.model';

export interface State {
  isFetching: boolean;
  error: string;
  data: [DetailsDevice];
  paginator: PaginatorModel;
}

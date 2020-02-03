import {DetailsDevice} from './detailsDevice';
import {PaginatorModel} from './paginator.model';

export interface State {
  isFetching: boolean;
  error: string;
  content: [DetailsDevice];
  paginator: PaginatorModel;
}

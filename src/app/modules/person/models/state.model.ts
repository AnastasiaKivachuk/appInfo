import {DetailsPersonModel} from './detailsPerson.model';
import {PaginatorModel} from './paginator.model';

export interface State {
  isFetching: boolean;
  error: string;
  content: [DetailsPersonModel];
  paginator: PaginatorModel;
}

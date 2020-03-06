
import {PaginatorModel} from './paginator.model';
import {OrganizationModel} from '../../person/models';

export interface State {
  isFetching: boolean;
  error: string;
  content: OrganizationModel[];
  paginator: PaginatorModel;
}

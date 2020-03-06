import {AddressModel} from './address.model';

export interface OrganizationModel {
  id?: number;
  ownerForm: string;
  name: string;
  address?: AddressModel[];
}


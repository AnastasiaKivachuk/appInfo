import {AddressModel} from './address.model';
import {PhonesModel} from './phones.model';

export interface ContactModel {
  id: number;
  address: [AddressModel];
  phones: [PhonesModel]
  site: string;
  email: string;
}


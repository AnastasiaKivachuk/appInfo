import {OrganizationModel} from './organization.model';
import {ContactModel} from './contact.model';
import {DetailsDeviceModel} from '../../device/models';

export interface DetailsPersonModel {
  id: number;
  name: string;
  middleName: string;
  lastName: string;
  birthDate?: string | undefined;
  organization: OrganizationModel;
  privateNumber: string;
  passportSeries: string;
  passportNumber: number;
  description: string;
  contacts: [ContactModel];
  devices: [DetailsDeviceModel];
}


export interface DetailsDeviceModel {
  id: number;
  name: string;
  serialNumber: string;
  organizationNumber?: string | undefined;
  purchaseDate?: string | undefined;
  inUse?: boolean | undefined;
  broken?: boolean | undefined;
}

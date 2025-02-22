export type AddressCreateParams = {
  AddressName: string;
  DefaultYN?: 0 | 1;
  EmailAddress: string;
  FirstName: string;
  LastName: string;
  JobTitle?: string;
  Organization?: string;
  Address1: string;
  Address2?: string;
  City: string;
  StateProvince: string;
  StateProvinceChoice: string;
  Zip: string;
  Country: string;
  Phone: string;
  PhoneExt?: string;
  Fax?: string;
};

export type AddressDeleteParams = {
  AddressId: number;
};

export type GetAddressInfoParams = AddressDeleteParams;

export type AddressSetDefaultParams = AddressDeleteParams;

export type AddressUpdateParams = AddressDeleteParams & AddressCreateParams;

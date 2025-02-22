export type AddressCreateResult = {
  Success: string;
  AddressID: string;
  AddressName: string;
};

export type AddressDeleteResult = {
  Success: string;
  ProfileID: string;
  Username: string;
};

export type GetAddressInfoResult = {
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

type List = {
  AddressId: string;
  AddressName: string;
};

export type AddressGetListResult = {
  List: List | List[];
};

export type AddressSetDefaultResult = {
  Success: string;
  AddressID: string;
};

export type AddressUpdateResult = AddressCreateResult;

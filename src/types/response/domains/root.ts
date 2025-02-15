type Domain = {
  ID: string;
  Name: string;
  User: string;
  Created: string;
  Expires: string;
  IsExpired: string;
  IsLocked: string;
  AutoRenew: string;
  WhoisGuard: string;
  IsPremium: string;
  IsOurDNS: string;
};

export type DomainGetListResult = {
  Domain: Domain | Domain[];
};

export type Paging = {
  TotalItems: string;
  CurrentPage: string;
  PageSize: string;
};

export type Contact = {
  ReadOnly: string;
  OrganizationName: Record<string, unknown>;
  JobTitle: Record<string, unknown>;
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: Record<string, unknown>;
  City: string;
  StateProvince: string;
  StateProvinceChoice: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: Record<string, unknown>;
  EmailAddress: string;
  PhoneExt: Record<string, unknown>;
};

export type WhoisGuardContact = {
  ReadOnly: string;
  OrganizationName: string;
  JobTitle: string;
  FirstName: string;
  LastName: string;
  Address1: string;
  City: string;
  StateProvince: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  EmailAddress: string;
};

export type DomainContactsResult = {
  Domain: string;
  domainnameid: string;
  Registrant: Contact;
  Tech: Contact;
  Admin: Contact;
  AuxBilling: Contact;
  CurrentAttributes: Record<string, unknown>;
  WhoisGuardContact: {
    Registrant: WhoisGuardContact;
    Tech: WhoisGuardContact;
    Admin: WhoisGuardContact;
    AuxBilling: WhoisGuardContact;
  };
};

export type DomainCreateResult = {
  Domain: string;
  Registered: string;
  ChargedAmount: string;
  DomainID: string;
  OrderID: string;
  TransactionID: string;
  WhoisguardEnable: string;
  NonRealTimeDomain: string;
};

export type Tld = {
  Name: string;
  NonRealTimeDomain: string;
  MinRegisterYears: string;
  MaxRegisterYears: string;
  MinRenewYears: string;
  MaxRenewYears: string;
  MinTransferYears: string;
  MaxTransferYears: string;
  IsApiRegisterable: string;
  IsApiRenewable: string;
  IsApiTransferable: string;
  IsEppRequired: string;
  IsDisableModContact: string;
  IsDisableWGAllot: string;
  IsIncludeInExtendedSearchOnly: string;
  SequenceNumber: string;
  Type: string;
  IsSupportsIDN: string;
  Category: string;
};

export type DomainSetContactResult = {
  Domain: string;
  IsSuccess: string;
};

export type DomainCheckResult = {
  Domain: string;
  Available: string;
  IsPremiumName: string;
  PremiumRegistrationPrice: string;
  PremiumRenewalPrice: string;
  PremiumRestorePrice: string;
  PremiumTransferPrice: string;
  IcannFee: string;
  EapFee: string;
};

export type DomainReactivateResult = {
  DomainName: string;
  IsSuccess: string;
  ChargedAmount: string;
  OrderID: string;
  TransactionID: string;
};

export type DomainRenewResult = {
  DomainName: string;
  DomainID: string;
  Renew: string;
  ChargedAmount: string;
  OrderID: string;
  TransactionID: string;
  DomainDetails: {
    ExpiredDate: string;
    NumYears: string;
  };
};

export type DomainGetRegistrarLockResult = {
  Domain: string;
  RegistrarLockStatus: string;
};

export type DomainSetRegistrarLockResult = {
  Domain: string;
  IsSuccess: string;
};

export type DomainGetInfoResult = {
  Status: string;
  ID: string;
  DomainName: string;
  OwnerName: string;
  IsOwner: string;
  IsPremium: string;
  DomainDetails: {
    CreatedDate: string;
    ExpiredDate: string;
  };
  LockDetails: unknown;
  Whoisguard: {
    Enabled: string;
    ID: string;
    ExpiredDate: string;
  };
  DnsDetails: {
    ProviderType: string;
  };
  Modificationrights: {
    All: string;
  };
};

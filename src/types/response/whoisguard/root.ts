export type WhoisguardChangeEmailAddressResult = {
  ID: string;
  IsSuccess: string;
  WGEmail: string;
  WGOldEmail: string;
};

export type WhoisguardEnableResult = {
  DomainName: string;
  IsSuccess: string;
};

export type WhoisguardDisableResult = WhoisguardEnableResult;

type Whoisguard = {
  ID: string;
  DomainName: string;
  Created: string;
  Expires: string;
  Status: string;
};

export type WhoisguardGetListResult = {
  Whoisguard: Whoisguard | Whoisguard[];
};

export type WhoisguardRenewResult = {
  WhoisGuardID: string;
  Years: string;
  Renew: string;
  OrderId: string;
  TransactionId: string;
  ChargedAmount: string;
};

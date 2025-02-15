export type DomainsDNSSetDefaultParams = {
  SLD: string;
  TLD: string;
};

export type DomainsDNSSetCustomParams = {
  SLD: string;
  TLD: string;
  Nameservers: string;
};

export type DomainsDNSGetListParams = {
  SLD: string;
  TLD: string;
};

export type DomainsDNSGetHostsParams = {
  SLD: string;
  TLD: string;
};

export type DomainsDNSGetEmailForwardingParams = {
  DomainName: string;
};

export type DomainsDNSSetEmailForwardingParams = {
  DomainName: string;
  [key: string]: string;
};

export type DomainsDNSSetHostsParams = {
  SLD: string;
  TLD: string;
  EmailType: string;
  [key: string]: string;
};

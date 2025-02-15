export type DomainsNSCreateParams = {
  SLD: string;
  TLD: string;
  Nameserver: string;
  IP: string;
};

export type DomainsNSDeleteParams = {
  SLD: string;
  TLD: string;
  Nameserver: string;
};

export type DomainsNSGetInfoParams = {
  SLD: string;
  TLD: string;
  Nameserver: string;
};

export type DomainsNSUpdateParams = {
  SLD: string;
  TLD: string;
  Nameserver: string;
  OldIP: string;
  IP: string;
};

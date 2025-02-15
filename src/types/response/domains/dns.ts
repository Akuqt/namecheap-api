export type DomainDNSSetDefaultResult = {
  Domain: string;
  Updated: string;
};

export type DomainDNSSetCustomResult = {
  Domain: string;
  Updated: string;
};

export type DomainDNSGetListResult = {
  Domain: "domain.com";
  IsUsingOurDNS: "true";
  Nameserver: string[];
};

type Host = {
  HostId: string;
  Name: string;
  Type: string;
  Address: string;
  MXPref: string;
  TTL: string;
};

export type DomainDNSGetHostsResult = {
  Domain: string;
  IsUsingOurDNS: string;
  Host: Host | Host[];
};

export type DomainDNSGetEmailForwardingResult = {
  Domain: string;
  Forward: string[];
};

export type DomainDNSSetEmailForwardingResult = {
  Domain: string;
  IsSuccess: string;
};

export type DomainDNSSetHostsResult = {
  Domain: string;
  IsSuccess: string;
};

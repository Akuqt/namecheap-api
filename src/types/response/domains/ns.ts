export type DomainNSCreateResult = {
  Domain: string;
  Nameserver: string;
  IP: string;
  IsSuccess: string;
};

export type DomainNSDeleteResult = {
  Domain: string;
  Nameserver: string;
  IsSuccess: string;
};

export type DomainNSInfoResult = {
  Domain: string;
  Nameserver: string;
  IP: string;
  NameserverStatuses: {
    Status: string[];
  };
};

export type DomainNSUpdateResult = {
  Domain: string;
  Nameserver: string;
  IsSuccess: string;
};

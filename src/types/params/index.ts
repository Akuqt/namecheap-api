import {
  DomainsRenewParams,
  DomainsCheckParams,
  DomainsCreateParams,
  DomainsGetInfoParams,
  DomainsGetListParams,
  DomainsReactivateParams,
  DomainsGetContactsParams,
  DomainsSetContactsParams,
  DomainsGetRegistrarLockParams,
  DomainsSetRegistrarLockParams,
} from "./domains/root";

import {
  DomainsDNSGetListParams,
  DomainsDNSGetHostsParams,
  DomainsDNSSetHostsParams,
  DomainsDNSSetCustomParams,
  DomainsDNSSetDefaultParams,
  DomainsDNSSetEmailForwardingParams,
  DomainsDNSGetEmailForwardingParams,
} from "./domains/dns";

import {
  DomainsNSCreateParams,
  DomainsNSDeleteParams,
  DomainsNSUpdateParams,
  DomainsNSGetInfoParams,
} from "./domains/ns";

import {
  DomainsTransferCreateParams,
  DomainsTransferGetListParams,
  DomainsTransferGetStatusParams,
  DomainsTransferUpdateStatusParams,
} from "./domains/transfer";

export interface ParamsMap {
  // domains
  "domains.getList": DomainsGetListParams;
  "domains.getContacts": DomainsGetContactsParams;
  "domains.setContacts": DomainsSetContactsParams;
  "domains.create": DomainsCreateParams;
  "domains.getTldList": never;
  "domains.check": DomainsCheckParams;
  "domains.reactivate": DomainsReactivateParams;
  "domains.renew": DomainsRenewParams;
  "domains.getRegistrarLock": DomainsGetRegistrarLockParams;
  "domains.setRegistrarLock": DomainsSetRegistrarLockParams;
  "domains.getInfo": DomainsGetInfoParams;
  // domains.dns
  "domains.dns.setDefault": DomainsDNSSetDefaultParams;
  "domains.dns.setCustom": DomainsDNSSetCustomParams;
  "domains.dns.getList": DomainsDNSGetListParams;
  "domains.dns.getHosts": DomainsDNSGetHostsParams;
  "domains.dns.getEmailForwarding": DomainsDNSGetEmailForwardingParams;
  "domains.dns.setEmailForwarding": DomainsDNSSetEmailForwardingParams;
  "domains.dns.setHosts": DomainsDNSSetHostsParams;
  // domains.ns
  "domains.ns.create": DomainsNSCreateParams;
  "domains.ns.delete": DomainsNSDeleteParams;
  "domains.ns.getInfo": DomainsNSGetInfoParams;
  "domains.ns.update": DomainsNSUpdateParams;
  // domains.transfer
  "domains.transfer.create": DomainsTransferCreateParams;
  "domains.transfer.getStatus": DomainsTransferGetStatusParams;
  "domains.transfer.updateStatus": DomainsTransferUpdateStatusParams;
  "domains.transfer.getList": DomainsTransferGetListParams;
}

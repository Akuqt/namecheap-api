import {
  Tld,
  Paging,
  DomainCheckResult,
  DomainRenewResult,
  DomainCreateResult,
  DomainGetListResult,
  DomainGetInfoResult,
  DomainContactsResult,
  DomainSetContactResult,
  DomainReactivateResult,
  DomainSetRegistrarLockResult,
  DomainGetRegistrarLockResult,
} from "./domains/root";

import {
  DomainDNSGetListResult,
  DomainDNSSetHostsResult,
  DomainDNSGetHostsResult,
  DomainDNSSetCustomResult,
  DomainDNSSetDefaultResult,
  DomainDNSSetEmailForwardingResult,
  DomainDNSGetEmailForwardingResult,
} from "./domains/dns";

import {
  DomainNSInfoResult,
  DomainNSCreateResult,
  DomainNSDeleteResult,
  DomainNSUpdateResult,
} from "./domains/ns";

import {
  TransferGetListResult,
  DomainTransferCreateResult,
  DomainTransferGetStatusResult,
  DomainTransferUpdateStatusResult,
} from "./domains/transfer";

import { Methods } from "../methods";

type CommandResponses = {
  Type: `namecheap.${Methods}`;
  // domains
  DomainGetListResult: DomainGetListResult;
  Paging: Paging;
  DomainContactsResult: DomainContactsResult;
  DomainSetContactResult: DomainSetContactResult;
  DomainCreateResult: DomainCreateResult;
  Tlds: Tld | Tld[];
  DomainCheckResult: DomainCheckResult;
  DomainReactivateResult: DomainReactivateResult;
  DomainRenewResult: DomainRenewResult;
  DomainGetRegistrarLockResult: DomainGetRegistrarLockResult;
  DomainSetRegistrarLockResult: DomainSetRegistrarLockResult;
  DomainGetInfoResult: DomainGetInfoResult;
  // domains.dns
  DomainDNSGetListResult: DomainDNSGetListResult;
  DomainDNSSetHostsResult: DomainDNSSetHostsResult;
  DomainDNSGetHostsResult: DomainDNSGetHostsResult;
  DomainDNSSetCustomResult: DomainDNSSetCustomResult;
  DomainDNSSetDefaultResult: DomainDNSSetDefaultResult;
  DomainDNSSetEmailForwardingResult: DomainDNSSetEmailForwardingResult;
  DomainDNSGetEmailForwardingResult: DomainDNSGetEmailForwardingResult;
  // domains.ns
  DomainNSInfoResult: DomainNSInfoResult;
  DomainNSCreateResult: DomainNSCreateResult;
  DomainNSDeleteResult: DomainNSDeleteResult;
  DomainNSUpdateResult: DomainNSUpdateResult;
  // domains.transfer
  TransferGetListResult: TransferGetListResult;
  DomainTransferCreateResult: DomainTransferCreateResult;
  DomainTransferGetStatusResult: DomainTransferGetStatusResult;
  DomainTransferUpdateStatusResult: DomainTransferUpdateStatusResult;
};

export type Response<U extends keyof Omit<CommandResponses, "Type">> = {
  ApiResponse: {
    xmlns: string;
    Status: string;
    Errors: any;
    RequestedCommand: `namecheap.${Methods}`;
    CommandResponse: Pick<CommandResponses, U | "Type">;
    Server: string;
    GMTTimeDifference: string;
    ExecutionTime: string;
  };
};

export type ResponseMap = {
  // domains
  "domains.getList": Response<"DomainGetListResult">;
  "domains.getContacts": Response<"DomainContactsResult">;
  "domains.setContacts": Response<"DomainSetContactResult">;
  "domains.create": Response<"DomainCreateResult">;
  "domains.getTldList": Response<"Tlds">;
  "domains.check": Response<"DomainCheckResult">;
  "domains.reactivate": Response<"DomainReactivateResult">;
  "domains.renew": Response<"DomainRenewResult">;
  "domains.getRegistrarLock": Response<"DomainGetRegistrarLockResult">;
  "domains.setRegistrarLock": Response<"DomainSetRegistrarLockResult">;
  "domains.getInfo": Response<"DomainGetInfoResult">;
  // domains.dns
  "domains.dns.setDefault": Response<"DomainDNSSetDefaultResult">;
  "domains.dns.setCustom": Response<"DomainDNSSetCustomResult">;
  "domains.dns.getList": Response<"DomainDNSGetListResult">;
  "domains.dns.getHosts": Response<"DomainDNSGetHostsResult">;
  "domains.dns.getEmailForwarding": Response<"DomainDNSGetEmailForwardingResult">;
  "domains.dns.setEmailForwarding": Response<"DomainDNSSetEmailForwardingResult">;
  "domains.dns.setHosts": Response<"DomainDNSSetHostsResult">;
  // domains.ns
  "domains.ns.create": Response<"DomainNSCreateResult">;
  "domains.ns.delete": Response<"DomainNSDeleteResult">;
  "domains.ns.getInfo": Response<"DomainNSInfoResult">;
  "domains.ns.update": Response<"DomainNSUpdateResult">;
  // domains.transfer
  "domains.transfer.create": Response<"DomainTransferCreateResult">;
  "domains.transfer.getStatus": Response<"DomainTransferGetStatusResult">;
  "domains.transfer.updateStatus": Response<"DomainTransferUpdateStatusResult">;
  "domains.transfer.getList": Response<"TransferGetListResult" | "Paging">;
};

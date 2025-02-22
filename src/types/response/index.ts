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

import {
  SSLListResult,
  SSLRenewResult,
  SSLCreateResult,
  SSLGetInfoResult,
  SSLParseCSRResult,
  SSLActivateResult,
  SSLEditDCVMethodResult,
  RevokeCertificateResult,
  SSLPurchaseMoreSANSResult,
  GetApproverEmailListResult,
  SSLResendApproverEmailResult,
  SSLResendFulfillmentEmailResult,
} from "./ssl/root";

import {
  UserLoginResult,
  UserCreateResult,
  UserUpdateResult,
  UserGetPricingResult,
  UserGetBalancesResult,
  UserResetPasswordResult,
  GetAddFundsStatusResult,
  UserChangePasswordResult,
  Createaddfundsrequestresult,
} from "./users/root";

import {
  AddressCreateResult,
  AddressDeleteResult,
  AddressUpdateResult,
  GetAddressInfoResult,
  AddressGetListResult,
  AddressSetDefaultResult,
} from "./users/address";

import {
  WhoisguardRenewResult,
  WhoisguardEnableResult,
  WhoisguardDisableResult,
  WhoisguardGetListResult,
  WhoisguardChangeEmailAddressResult,
} from "./whoisguard/root";

type CommandResponses = {
  Type: `namecheap.${keyof ResponseMap}`;
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
  // ssl
  SSLCreateResult: SSLCreateResult;
  SSLListResult: SSLListResult;
  SSLParseCSRResult: SSLParseCSRResult;
  GetApproverEmailListResult: GetApproverEmailListResult;
  SSLActivateResult: SSLActivateResult;
  SSLResendApproverEmailResult: SSLResendApproverEmailResult;
  SSLGetInfoResult: SSLGetInfoResult;
  SSLRenewResult: SSLRenewResult;
  SSLResendFulfillmentEmailResult: SSLResendFulfillmentEmailResult;
  SSLPurchaseMoreSANSResult: SSLPurchaseMoreSANSResult;
  RevokeCertificateResult: RevokeCertificateResult;
  SSLEditDCVMethodResult: SSLEditDCVMethodResult;
  // users
  UserGetPricingResult: UserGetPricingResult;
  UserGetBalancesResult: UserGetBalancesResult;
  UserChangePasswordResult: UserChangePasswordResult;
  UserUpdateResult: UserUpdateResult;
  Createaddfundsrequestresult: Createaddfundsrequestresult;
  GetAddFundsStatusResult: GetAddFundsStatusResult;
  UserCreateResult: UserCreateResult;
  UserLoginResult: UserLoginResult;
  UserResetPasswordResult: UserResetPasswordResult;
  // users.address
  AddressCreateResult: AddressCreateResult;
  AddressDeleteResult: AddressDeleteResult;
  GetAddressInfoResult: GetAddressInfoResult;
  AddressGetListResult: AddressGetListResult;
  AddressSetDefaultResult: AddressSetDefaultResult;
  AddressUpdateResult: AddressUpdateResult;
  // whoisguard
  WhoisguardChangeEmailAddressResult: WhoisguardChangeEmailAddressResult;
  WhoisguardEnableResult: WhoisguardEnableResult;
  WhoisguardDisableResult: WhoisguardDisableResult;
  WhoisguardGetListResult: WhoisguardGetListResult;
  WhoisguardRenewResult: WhoisguardRenewResult;
};

export type Response<U extends keyof Omit<CommandResponses, "Type">> = {
  ApiResponse: {
    xmlns: string;
    Status: string;
    Errors: unknown;
    RequestedCommand: `namecheap.${keyof ResponseMap}`;
    CommandResponse: Pick<CommandResponses, U | "Type">;
    Server: string;
    GMTTimeDifference: string;
    ExecutionTime: string;
  };
};

export type ResponseMap = {
  // domains
  "domains.getList": Response<"DomainGetListResult" | "Paging">;
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
  // ssl
  "ssl.create": Response<"SSLCreateResult">;
  "ssl.getList": Response<"SSLListResult" | "Paging">;
  "ssl.parseCSR": Response<"SSLParseCSRResult">;
  "ssl.getApproverEmailList": Response<"GetApproverEmailListResult">;
  "ssl.activate": Response<"SSLActivateResult">;
  "ssl.resendApproverEmail": Response<"SSLResendApproverEmailResult">;
  "ssl.getInfo": Response<"SSLGetInfoResult">;
  "ssl.renew": Response<"SSLRenewResult">;
  "ssl.reissue": Response<"SSLActivateResult">;
  "ssl.resendfulfillmentemail": Response<"SSLResendFulfillmentEmailResult">;
  "ssl.purchasemoresans": Response<"SSLPurchaseMoreSANSResult">;
  "ssl.revokecertificate": Response<"RevokeCertificateResult">;
  "ssl.editdcvmethod": Response<"SSLEditDCVMethodResult">;
  // users
  "users.getPricing": Response<"UserGetPricingResult">;
  "users.getBalances": Response<"UserGetBalancesResult">;
  "users.changePassword": Response<"UserChangePasswordResult">;
  "users.update": Response<"UserUpdateResult">;
  "users.createaddfundsrequest": Response<"Createaddfundsrequestresult">;
  "users.getAddFundsStatus": Response<"GetAddFundsStatusResult">;
  "users.create": Response<"UserCreateResult">;
  "users.login": Response<"UserLoginResult">;
  "users.resetPassword": Response<"UserResetPasswordResult">;
  // users.address
  "users.address.create": Response<"AddressCreateResult">;
  "users.address.delete": Response<"AddressDeleteResult">;
  "users.address.getInfo": Response<"GetAddressInfoResult">;
  "users.address.getList": Response<"AddressGetListResult">;
  "users.address.setDefault": Response<"AddressSetDefaultResult">;
  "users.address.update": Response<"AddressUpdateResult">;
  // whoisguard
  "whoisguard.changeemailaddress": Response<"WhoisguardChangeEmailAddressResult">;
  "whoisguard.enable": Response<"WhoisguardEnableResult">;
  "whoisguard.disable": Response<"WhoisguardDisableResult">;
  "whoisguard.getList": Response<"WhoisguardGetListResult">;
  "whoisguard.renew": Response<"WhoisguardRenewResult">;
};

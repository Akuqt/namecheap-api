type DomainList =
  | "getList"
  | "getContacts"
  | "create"
  | "getTldList"
  | "setContacts"
  | "check"
  | "reactivate"
  | "renew"
  | "getRegistrarLock"
  | "setRegistrarLock"
  | "getInfo";

type DomainDNSList =
  | "setDefault"
  | "setCustom"
  | "getList"
  | "getHosts"
  | "getEmailForwarding"
  | "setEmailForwarding"
  | "setHosts";

type DomainNSList = "create" | "delete" | "getInfo" | "update";

type DomainTransferList = "create" | "getStatus" | "updateStatus" | "getList";

type SSLList =
  | "create"
  | "getList"
  | "parseCSR"
  | "getApproverEmailList"
  | "activate"
  | "resendApproverEmail"
  | "getInfo"
  | "renew"
  | "reissue"
  | "resendfulfillmentemail"
  | "purchasemoresans"
  | "revokecertificate"
  | "editDCVMethod";

type UserList =
  | "getPricing"
  | "getBalances"
  | "changePassword"
  | "update"
  | "createaddfundsrequest"
  | "getAddFundsStatus"
  | "create"
  | "login"
  | "resetPassword";

type UserAddressList =
  | "create"
  | "delete"
  | "getInfo"
  | "getList"
  | "setDefault"
  | "update";

type DomainPrivacyList =
  | "changeemailaddress"
  | "enable"
  | "disable"
  | "getList"
  | "renew";

type DomainMethods = `domains.${DomainList}`;
type DomainDNSMethods = `domains.dns.${DomainDNSList}`;
type DomainNSMethods = `domains.ns.${DomainNSList}`;
type DomainTransferMethods = `domains.transfer.${DomainTransferList}`;
type SSLMethods = `ssl.${SSLList}`;
type UserMethods = `users.${UserList}`;
type UserAddressMethods = `users.address.${UserAddressList}`;
type DomainPrivacyMethods = `domainprivacy.${DomainPrivacyList}`;

export type Methods =
  | DomainMethods
  | DomainDNSMethods
  | DomainNSMethods
  | DomainTransferMethods
  | SSLMethods
  | UserMethods
  | UserAddressMethods
  | DomainPrivacyMethods;

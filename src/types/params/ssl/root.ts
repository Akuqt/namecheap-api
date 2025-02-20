export type SSLCreateParams = {
  Years: number;
  Type: string;
  SANStoADD?: number;
  PromotionCode?: string;
};

export type SSLGetListParams = {
  ListType?:
    | "ALL"
    | "Processing"
    | "EmailSent"
    | "TechnicalProblem"
    | "InProgress"
    | "Completed"
    | "Deactivated"
    | "Active"
    | "Cancelled"
    | "NewPurchase"
    | "NewRenewal";
  SearchTerm?: string;
  Page?: number;
  PageSize?: number;
  SortBy?:
    | "PURCHASEDATE"
    | "PURCHASEDATE_DESC"
    | "SSLTYPE"
    | "SSLTYPE_DESC"
    | "EXPIREDATETIME"
    | "EXPIREDATETIME_DESC"
    | "Host_Name"
    | "Host_Name_DESC";
};

export type SSLParseCSRParams = {
  csr: string;
  CertificateType?:
    | "InstantSSL"
    | "PositiveSSL"
    | "PositiveSSL Wildcard"
    | "EssentialSSL"
    | "EssentialSSL Wildcard"
    | "InstantSSL Pro"
    | "PremiumSSL Wildcard"
    | "EV SSL"
    | "EV Multi Domain SSL"
    | "Multi Domain SSL"
    | "PositiveSSL Multi Domain"
    | "Unified Communications";
};

export type SSLGetApproverEmailListParams = {
  DomainName: string;
  CertificateType:
    | "InstantSSL"
    | "PositiveSSL"
    | "PositiveSSL Wildcard"
    | "EssentialSSL"
    | "EssentialSSL Wildcard"
    | "InstantSSL Pro"
    | "PremiumSSL Wildcard"
    | "EV SSL"
    | "EV Multi Domain SSL"
    | "Multi Domain SSL"
    | "PositiveSSL Multi Domain"
    | "Unified Communications";
};

export type SSLActivateResultParams = {
  CertificateID: number;
  CSR: string;
  AdminEmailAddress: string;
  WebServerType?: string;
  UniqueValue?: string;
  ApproverEmail?: string;
  HTTPDCValidation: boolean;
  DNSDCValidation: boolean;
  DNSNames: string;
  DNSApproverEmails: string;
  AdminOrganizationName: string;
  OrganizationDepartment: string;
  AdminCountry: string;
  AdminStateProvince: string;
  AdminCity: string;
  AdminAddress1: string;
  AdminAddress2: string;
  AdminPostalCode: string;
  AdminPhone: string;
  OrganizationDUNS: string;
  CompanyIncorporationCountry: string;
  CompanyIncorporationStateProvince: string;
  CompanyIncorporationLocality: string;
  CompanyIncorporationDate: string;
  CompanyDBA: string;
  CompanyRegistrationNumber: string;
  OrganizationRepFirstName: string;
  OrganizationRepLastName: string;
  OrganizationRepTitle: string;
  OrganizationRepPhone: string;
  OrganizationRepEmailAddress: string;
};

export type SSLResendApproverEmailParams = {
  CertificateID: string;
};

export type SSLGetInfoParams = {
  Returncertificate?: string;
  Returntype?: "Individual" | "PKCS7";
};

export type SSLRenewParams = {
  CertificateID: number;
  Years: number;
  PromotionCode?: string;
  SSLType:
    | "InstantSSL"
    | "PositiveSSL"
    | "PositiveSSL Wildcard"
    | "EssentialSSL"
    | "EssentialSSL Wildcard"
    | "InstantSSL Pro"
    | "PremiumSSL Wildcard"
    | "EV SSL"
    | "EV Multi Domain SSL"
    | "Multi Domain SSL"
    | "PositiveSSL Multi Domain"
    | "Unified Communications";
};

export type SSLResendFulfillmentEmailParams = {
  CertificateID: string;
};

export type SSLPurchaseMoreSANSParams = {
  CertificateID: number;
  NumberOfSANSToAdd: number;
};

export type SSLRevokeCertificateParams = {
  CertificateID: number;
  SSLType:
    | "InstantSSL"
    | "PositiveSSL"
    | "PositiveSSL Wildcard"
    | "EssentialSSL"
    | "EssentialSSL Wildcard"
    | "InstantSSL Pro"
    | "PremiumSSL Wildcard"
    | "EV SSL"
    | "EV Multi Domain SSL"
    | "Multi Domain SSL"
    | "PositiveSSL Multi Domain"
    | "Unified Communications";
};

export type SSLEditDCVMethodParams = {
  CertificateID: number;
  DCVMethod: string;
  DNSNames: string;
  DCVMethods: string;
};

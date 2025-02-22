export type UserGetPricingParams = {
  PromotionCode?: string;
  ProductType: "DOMAIN" | "SSLCERTIFICATE";
  ProductCategory: "DOMAINS" | "COMODO";
  ActionName: "REGISTER" | "RENEW" | "REACTIVATE" | "TRANSFER" | "PURCHASE";
  ProductName: "COM" | "INSTANTSSL";
};

export type UserChangePasswordParams = {
  OldPassword: string;
  NewPassword: string;
};

export type UserUpdateParams = {
  FirstName: string;
  LastName: string;
  JobTitle?: string;
  Organization?: string;
  Address1: string;
  Address2?: string;
  City: string;
  StateProvince: string;
  Zip: string;
  Country: string;
  EmailAddress: string;
  Phone: string;
  PhoneExt?: string;
  Fax?: string;
};

export type CreateaddfundsrequestParams = {
  Username: string;
  PaymentType: "Creditcard";
  Amount: number;
  ReturnUrl: string;
};

export type GetAddFundsStatusParams = {
  TokenId: string;
};

export type UserCreateParams = {
  NewUserName: string;
  NewUserPassword: string;
  EmailAddress: string;
  IgnoreDuplicateEmailAddress?: string;
  AcceptTerms: number;
  AcceptNews: number;
} & UserUpdateParams;

export type UserLoginParams = {
  Password: string;
};

export type UserResetPasswordParams = {
  FindBy: "EMAILADDRESS" | " DOMAINNAME" | "USERNAME";
  FindByValue: string;
  EmailFromName?: string;
  EmailFrom?: string;
  URLPattern?: string;
};

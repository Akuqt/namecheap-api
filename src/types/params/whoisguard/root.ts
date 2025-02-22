export type WhoisguardChangeEmailAddressParams = {
  WhoisguardID: number;
};

export type WhoisguardEnableParams = {
  WhoisguardID: number;
  ForwardedToEmail: string;
};

export type WhoisguardDisableParams = WhoisguardChangeEmailAddressParams;

export type WhoisguardGetListParams = {
  ListType: "ALL" | "ALLOTED" | "FREE";
  Page: number;
  PageSize: number;
};

export type WhoisguardRenewParams = {
  WhoisguardID: string;
  Years: number;
  PromotionCode?: string;
};

export type DomainsGetListParams = {
  ListType?: "ALL" | "EXPIRING" | "EXPIRED";
  SearchTerm?: string;
  Page?: number;
  PageSize?: number;
  SortBy?:
    | "NAME"
    | "NAME_DESC"
    | "EXPIREDATE"
    | "EXPIREDATE_DESC"
    | "CREATEDATE"
    | "CREATEDATE_DESC";
};

export type DomainsGetContactsParams = {
  DomainName: string;
};

export type DomainsCreateParams = {
  DomainName: string;
  Years: number;
  PromotionCode?: string;
  RegistrantOrganizationName?: string;
  RegistrantJobTitle?: string;
  RegistrantFirstName: string;
  RegistrantLastName: string;
  RegistrantAddress1: string;
  RegistrantAddress2?: string;
  RegistrantCity: string;
  RegistrantStateProvince: string;
  RegistrantStateProvinceChoice?: string;
  RegistrantPostalCode: string;
  RegistrantCountry: string;
  RegistrantPhone: string;
  RegistrantPhoneExt?: string;
  RegistrantFax?: string;
  RegistrantEmailAddress: string;
  TechOrganizationName?: string;
  TechJobTitle?: string;
  TechFirstName: string;
  TechLastName: string;
  TechAddress1: string;
  TechAddress2?: string;
  TechCity: string;
  TechStateProvince: string;
  TechStateProvinceChoice?: string;
  TechPostalCode: string;
  TechCountry: string;
  TechPhone: string;
  TechPhoneExt?: string;
  TechFax?: string;
  TechEmailAddress: string;
  AdminOrganizationName?: string;
  AdminJobTitle?: string;
  AdminFirstName: string;
  AdminLastName: string;
  AdminAddress1: string;
  AdminAddress2?: string;
  AdminCity: string;
  AdminStateProvince: string;
  AdminStateProvinceChoice?: string;
  AdminPostalCode: string;
  AdminCountry: string;
  AdminPhone: string;
  AdminPhoneExt?: string;
  AdminFax?: string;
  AdminEmailAddress: string;
  AuxBillingOrganizationName?: string;
  AuxBillingJobTitle?: string;
  AuxBillingFirstName: string;
  AuxBillingLastName: string;
  AuxBillingAddress1: string;
  AuxBillingAddress2?: string;
  AuxBillingCity: string;
  AuxBillingStateProvince: string;
  AuxBillingStateProvinceChoice?: string;
  AuxBillingPostalCode: string;
  AuxBillingCountry: string;
  AuxBillingPhone: string;
  AuxBillingPhoneExt?: string;
  AuxBillingFax?: string;
  AuxBillingEmailAddress: string;
  BillingFirstName?: string;
  BillingLastName?: string;
  BillingAddress1?: string;
  BillingAddress2?: string;
  BillingCity?: string;
  BillingStateProvince?: string;
  BillingStateProvinceChoice?: string;
  BillingPostalCode?: string;
  BillingCountry?: string;
  BillingPhone?: string;
  BillingPhoneExt?: string;
  BillingFax?: string;
  BillingEmailAddress?: string;
  IdnCode?:
    | "afr"
    | "ara"
    | "alb"
    | "arg"
    | "arm"
    | "asm"
    | "ast"
    | "ave"
    | "awa"
    | "aze"
    | "bak"
    | "bal"
    | "ban"
    | "baq"
    | "bas"
    | "bel"
    | "ben"
    | "bho"
    | "bos"
    | "bul"
    | "bur"
    | "car"
    | "cat"
    | "che"
    | "chi"
    | "chv"
    | "cop"
    | "cos"
    | "cze"
    | "dan"
    | "div"
    | "doi"
    | "dut"
    | "eng"
    | "est"
    | "fao"
    | "fij"
    | "fin"
    | "fre"
    | "fry"
    | "geo"
    | "ger"
    | "gla"
    | "gle"
    | "gon"
    | "gre"
    | "guj"
    | "heb"
    | "hin"
    | "hun"
    | "inc"
    | "ind"
    | "inh"
    | "isl"
    | "ita"
    | "jav"
    | "jpn"
    | "kas"
    | "kaz"
    | "khm"
    | "kir"
    | "kor"
    | "kur"
    | "lao"
    | "lav"
    | "lit"
    | "ltz"
    | "mal"
    | "mkd"
    | "mlt"
    | "mol"
    | "mon"
    | "mri"
    | "msa"
    | "nep"
    | "nor"
    | "ori"
    | "oss"
    | "pan"
    | "per"
    | "pol"
    | "por"
    | "pus"
    | "raj"
    | "rum"
    | "rus"
    | "san"
    | "scr"
    | "sin"
    | "slo"
    | "slv"
    | "smo"
    | "snd"
    | "som"
    | "spa"
    | "srd"
    | "srp"
    | "swa"
    | "swe"
    | "syr"
    | "tam"
    | "tel"
    | "tgk"
    | "tha"
    | "tib"
    | "tur"
    | "ukr"
    | "urd"
    | "uzb"
    | "vie"
    | "wel"
    | "yid";
  Nameservers?: string;
  AddFreeWhoisguard?: string;
  WGEnabled?: string;
  IsPremiumDomain?: boolean;
  PremiumPrice?: number;
  EapFee?: number;
  // May need to add extended attributes(?)
};

export type DomainsSetContactsParams = {
  DomainName: string;
  RegistrantOrganizationName?: string;
  RegistrantJobTitle?: string;
  RegistrantFirstName: string;
  RegistrantLastName: string;
  RegistrantAddress1: string;
  RegistrantAddress2?: string;
  RegistrantCity: string;
  RegistrantStateProvince: string;
  RegistrantStateProvinceChoice?: string;
  RegistrantPostalCode: string;
  RegistrantCountry: string;
  RegistrantPhone: string;
  RegistrantPhoneExt?: string;
  RegistrantFax?: string;
  RegistrantEmailAddress: string;
  TechOrganizationName?: string;
  TechJobTitle?: string;
  TechFirstName: string;
  TechLastName: string;
  TechAddress1: string;
  TechAddress2?: string;
  TechCity: string;
  TechStateProvince: string;
  TechStateProvinceChoice?: string;
  TechPostalCode: string;
  TechCountry: string;
  TechPhone: string;
  TechPhoneExt?: string;
  TechFax?: string;
  TechEmailAddress: string;
  AdminOrganizationName?: string;
  AdminJobTitle?: string;
  AdminFirstName: string;
  AdminLastName: string;
  AdminAddress1: string;
  AdminAddress2?: string;
  AdminCity: string;
  AdminStateProvince: string;
  AdminStateProvinceChoice?: string;
  AdminPostalCode: string;
  AdminCountry: string;
  AdminPhone: string;
  AdminPhoneExt?: string;
  AdminFax?: string;
  AdminEmailAddress: string;
  AuxBillingOrganizationName?: string;
  AuxBillingJobTitle?: string;
  AuxBillingFirstName: string;
  AuxBillingLastName: string;
  AuxBillingAddress1: string;
  AuxBillingAddress2?: string;
  AuxBillingCity: string;
  AuxBillingStateProvince: string;
  AuxBillingStateProvinceChoice?: string;
  AuxBillingPostalCode: string;
  AuxBillingCountry: string;
  AuxBillingPhone: string;
  AuxBillingPhoneExt?: string;
  AuxBillingFax?: string;
  AuxBillingEmailAddress: string;
  // May need to add extended attributes(?)
};

export type DomainsCheckParams = {
  DomainList: string;
};

export type DomainsReactivateParams = {
  DomainName: string;
  PromotionCode?: string;
  YearsToAdd?: number;
  IsPremiumDomain?: boolean;
  PremiumPrice?: number;
};

export type DomainsRenewParams = {
  DomainName: string;
  Years: number;
  PromotionCode?: string;
  IsPremiumDomain?: boolean;
  PremiumPrice?: number;
};

export type DomainsGetRegistrarLockParams = {
  DomainName: string;
};

export type DomainsSetRegistrarLockParams = {
  DomainName: string;
  LockAction?: "LOCK" | "UNLOCK";
};

export type DomainsGetInfoParams = {
  DomainName: string;
  HostName?: string;
};

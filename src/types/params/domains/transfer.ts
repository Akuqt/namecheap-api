export type DomainsTransferCreateParams = {
  DomainName: string;
  Years: string;
  EPPCode: string;
  PromotionCode?: string;
  AddFreeWhoisguard?: string;
  WGenable?: string;
};

export type DomainsTransferGetStatusParams = {
  TransferID: number;
};

export type DomainsTransferUpdateStatusParams = {
  TransferID: number;
  Resubmit: string;
};

export type DomainsTransferGetListParams = {
  ListType?: "ALL" | "INPROGRESS" | "CANCELLED" | "COMPLETED";
  SearchTerm?: string;
  Page?: number;
  PageSize?: number;
  SortBy?:
    | "DOMAINNAME"
    | "DOMAINNAME_DESC"
    | "TRANSFERDATE"
    | "TRANSFERDATE_DESC"
    | "STATUSDATE"
    | "STATUSDATE_DESC";
};

export type DomainTransferCreateResult = {
  DomainName: string;
  Transfer: string;
  TransferID: string;
  StatusID: string;
  ChargedAmount: string;
  OrderID: string;
  TransactionID: string;
  StatusCode: string;
};

export type DomainTransferGetStatusResult = {
  TransferID: string;
  StatusID: string;
  Status: string;
};

export type DomainTransferUpdateStatusResult = {
  TransferID: string;
  Resubmit: string;
};

type Transfer = {
  ID: string;
  Domainname: string;
  User: string;
  TransferDate: string;
  OrderID: string;
  StatusID: string;
  Status: string;
  StatusDate: string;
  StatusDescription: string;
};

export type TransferGetListResult = Transfer | Transfer[];

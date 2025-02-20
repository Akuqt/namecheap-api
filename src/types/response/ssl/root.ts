export type SSLCreateResult = {
  IsSuccess: string;
  OrderId: string;
  TransactionId: string;
  ChargedAmount: string;
  SSLCertificate: {
    CertificateID: string;
    Created: string;
    SSLType: string;
    Years: string;
    Status: string;
  };
};

type SSL = {
  CertificateID: string;
  HostName: string;
  SSLType: string;
  PurchaseDate: string;
  ExpireDate: string;
  ActivationExpireDate: string;
  IsExpiredYN: string;
  Status: string;
};

export type SSLListResult = {
  SSL: SSL | SSL[];
};

export type SSLParseCSRResult = {
  CSRDetails: {
    CommonName: string;
    DomainName: string;
    Country: string;
    OrganisationUnit: string;
    Organisation: string;
    ValidTrueDomain: string;
    State: string;
    Locality: string;
    Email: string;
    DNSNames: string;
  };
};

export type GetApproverEmailListResult = {
  Domain: string;
  Domainemails: {
    email: string | string[];
  };
  Genericemails: {
    email: string | string[];
  };
};

export type SSLActivateResult = {
  ID: string;
  IsSuccess: string;
  HttpDCValidation: {
    ValueAvailable: string;
    DNS: {
      domain: string;
      FileName: string;
      FileContent: string;
    };
  };
  DNSDCValidation: {
    ValueAvailable: string;
    DNS: {
      domain: string;
      HostName: string;
      Target: string;
    };
  };
};

export type SSLResendApproverEmailResult = {
  ID: string;
  IsSuccess: string;
};

export type SSLGetInfoResult = {
  Status: string;
  StatusDescription: string;
  Type: string;
  IssuedOn: string;
  Expires: string;
  ActivationExpireDate: string;
  OrderId: string;
  ReplacedBy: string;
  SANSCount: string;
  CertificateDetails: {
    CSR: string;
    ApproverEmail: string;
    CommonName: string;
    AdministratorName: string;
    AdministratorEmail: string;
    Certificates: {
      CertificateReturned: string;
      ReturnType: string;
      Certificate: string;
      CaCertificates: {
        Certificate: [
          {
            Type: string;
            Certificate: string;
          },
          {
            Type: string;
            Certificate: string;
          },
        ];
      };
    };
  };
  Provider: {
    OrderID: string;
    Name: string;
  };
};

export type SSLRenewResult = {
  CertificateID: string;
  SSLType: string;
  Years: string;
  OrderID: string;
  TransactionID: string;
  ChargedAmount: string;
};

export type SSLResendFulfillmentEmailResult = {
  ID: string;
  IsSuccess: string;
};

export type SSLPurchaseMoreSANSResult = {
  IsSuccess: string;
  OrderId: string;
  TransactionId: string;
  ChargedAmount: string;
  SSLCertificate: {
    CertificateID: string;
    SSLType: string;
    Years: string;
    Status: string;
    SANSCount: string;
  };
};

export type RevokeCertificateResult = {
  ID: string;
  IsSuccess: string;
};

export type SSLEditDCVMethodResult = {
  ID: string;
  IsSuccess: string;
  HttpDCValidation: {
    ValueAvailable: string;
    FileName: string;
    FileContent: string;
  };
  DNSDCValidation: {
    ValueAvailable: string;
    HostName: string;
    Target: string;
  };
  Domains: {
    Domains: [
      {
        Name: string;
        IsSuccess: string;
        DCVMethodSet: string;
      },
      {
        Name: string;
        IsSuccess: string;
        DCVMethodSet: string;
      },
      {
        Name: string;
        IsSuccess: string;
        DCVMethodSet: string;
      },
    ];
  };
};

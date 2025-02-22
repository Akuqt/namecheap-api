type Price = {
  Duration: string;
  DurationType: string;
  Price: string;
  RegularPrice: string;
  YourPrice: string;
  CouponPrice: string;
  Currency: string;
};

type Product = {
  Name: string;
  Price: Price | Price[];
};

type ProductCategory = {
  Name: string;
  Product: Product | Product[];
};

export type UserGetPricingResult = {
  ProductType: {
    Name: string;
    ProductCategory: ProductCategory | ProductCategory[];
  };
};

export type UserGetBalancesResult = {
  Currency: string;
  AvailableBalance: string;
  AccountBalance: string;
  EarnedAmount: string;
  WithdrawableAmount: string;
  FundsRequiredForAutoRenew: string;
};

export type UserChangePasswordResult = {
  Success: string;
  UserID: string;
};

export type UserUpdateResult = UserChangePasswordResult;

export type Createaddfundsrequestresult = {
  TokenID: string;
  RedirectURL: string;
  ReturnURL: string;
};

export type GetAddFundsStatusResult = {
  TransactionID: string;
  Amount: "Creditcard";
  Status: number;
};

export type UserCreateResult = UserChangePasswordResult;

export type UserLoginResult = {
  LoginSuccess: string;
  Username: string;
};

export type UserResetPasswordResult = {
  Success: string;
  Email: string;
};

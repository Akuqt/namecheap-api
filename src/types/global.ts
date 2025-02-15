import { ParamsMap } from "./params";

export type NameCheapGlobalParams = {
  apiUser: string;
  apiKey: string;
  command: keyof ParamsMap;
  username: string;
  clientIP: string;
};

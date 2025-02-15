import { ParamsMap, ResponseMap, NameCheapGlobalParams } from "../types";
import { request, stringifyParams } from "../common";

type Params = Omit<NameCheapGlobalParams, "command">;
type UrlParams<T> = T & NameCheapGlobalParams;

export class NameCheap {
  private globalParams: Params;

  constructor(params?: Params) {
    this.globalParams ??= params || {
      apiKey: "",
      apiUser: "",
      clientIP: "",
      username: "",
    };
  }

  public setGlobalParams(params: Params) {
    this.globalParams = params;
  }

  public query<T extends keyof ParamsMap>(
    command: T,
    params: ParamsMap[T]
  ): Promise<ResponseMap[T]> {
    return request<ResponseMap[T]>(
      this.buildURL({
        ...this.globalParams,
        command,
        ...params,
      })
    );
  }

  private buildURL<T>(params: UrlParams<T>) {
    return `https://api.namecheap.com/xml.response?${stringifyParams(params)}`;
  }
}

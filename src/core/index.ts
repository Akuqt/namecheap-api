import { getURI, initGlobalParams, request, stringifyParams } from "../common";
import { NameCheapEnv, NameCheapGlobalParams } from "../types";
import { ParamsMap, ResponseMap } from "../types";

type Params = Omit<NameCheapGlobalParams, "command">;
type UrlParams<T> = T & NameCheapGlobalParams;

export class NameCheap {
  private globalParams: Params;
  private env: NameCheapEnv;

  constructor(params?: Params) {
    this.globalParams ??= params || initGlobalParams;
    this.env = "production";
  }

  public setGlobalParams(params: Params) {
    this.globalParams = params;
  }

  public setEnv(env: NameCheapEnv) {
    this.env = env;
  }

  public query<T extends keyof ParamsMap>(
    command: T,
    params: ParamsMap[T],
  ): Promise<ResponseMap[T]> {
    return request<ResponseMap[T]>(
      this.buildURL({
        ...this.globalParams,
        command,
        ...params,
      }),
    );
  }

  private buildURL<T>(params: UrlParams<T>) {
    return `${getURI(this.env)}?${stringifyParams(params)}`;
  }
}

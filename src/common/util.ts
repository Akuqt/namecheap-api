import { stringify, type ParsedUrlQueryInput } from "node:querystring";
import { NameCheapGlobalParams } from "../types";
import xmlConverter from "xml-js";

export type { ParsedUrlQueryInput };

export const stringifyParams = <T = any>(
  params: T & ParsedUrlQueryInput & NameCheapGlobalParams
) => {
  return stringify({
    ...params,
    command: `namecheap.${params.command}`,
  });
};

export const XMLToJSON = (xml: string) => {
  const json = xmlConverter.xml2json(xml, {
    compact: true,
    ignoreComment: true,
    ignoreDeclaration: true,
    ignoreCdata: true,
    ignoreDoctype: true,
    ignoreInstruction: true,
    spaces: 4,
  });
  return transformJson(JSON.parse(json));
};

export const transformJson = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformJson);
  }

  const newObj: any = {};

  for (const key in obj) {
    if (key === "_attributes") {
      Object.assign(newObj, obj[key]);
    } else if (typeof obj[key] === "object" && "_text" in obj[key]) {
      newObj[key] = obj[key]._text;
    } else if (
      Array.isArray(obj[key]) &&
      obj[key].every((item: any) => item._text)
    ) {
      newObj[key] = obj[key].map((item: any) => item._text);
    } else {
      newObj[key] = transformJson(obj[key]);
    }
  }

  return newObj;
};

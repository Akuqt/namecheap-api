import { stringify, type ParsedUrlQueryInput } from "node:querystring";
import { NameCheapGlobalParams } from "../types";
import xmlConverter from "xml-js";

export type { ParsedUrlQueryInput };

export const stringifyParams = <T>(
  params: T & ParsedUrlQueryInput & NameCheapGlobalParams,
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
    ignoreCdata: false,
    ignoreDoctype: true,
    ignoreInstruction: true,
    spaces: 4,
  });
  return transformJson(JSON.parse(json));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformJson = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformJson);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newObj: any = {};

  for (const key in obj) {
    if (key === "_attributes") {
      Object.assign(newObj, obj[key]);
    } else if (typeof obj[key] === "object" && "_text" in obj[key]) {
      newObj[key] = obj[key]._text;
    } else if (typeof obj[key] === "object" && "_cdata" in obj[key]) {
      newObj[key] = obj[key]._cdata;
    } else if (
      Array.isArray(obj[key]) &&
      obj[key].every((item) => item._text)
    ) {
      newObj[key] = obj[key].map((item) => item._text);
    } else {
      newObj[key] = transformJson(obj[key]);
    }
  }

  return newObj;
};

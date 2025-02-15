import https from "node:https";
import { XMLToJSON } from "./util";

export const request = <T = any>(url: string) => {
  let raw = "";
  return new Promise<T>((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: "GET",
        port: 443,
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          reject(
            new Error(`Request failed with status code ${res.statusCode}`)
          );
        }
        res.on("data", (d) => {
          raw += d.toString();
        });
      }
    );
    req.on("error", (e) => {
      reject(e);
    });
    req.on("close", () => {
      resolve(XMLToJSON(raw));
    });
    req.end();
  });
};

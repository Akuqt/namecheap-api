import { NameCheap } from "./core";
(async () => {
  const namecheap = new NameCheap({
    apiKey: "<...api key...>",
    apiUser: "user",
    clientIP: "127.0.0.1",
    username: "user",
  });

  const res = await namecheap.query("domains.dns.getHosts", {
    SLD: "example",
    TLD: "com",
  });

  console.log(res.ApiResponse.CommandResponse.DomainDNSGetHostsResult);
})();

# Namecheap API Project

The Namecheap API allow developers to easily interact with Namecheap's domain registration and management services. The goal is to provide a simple and intuitive interface for performing common tasks such as registering domains, managing DNS settings, and handling SSL certificates.

## Features

- Domain registration and renewal
- DNS management
- SSL certificate management
- Account balance and transaction history

## Installation

To install the package, use the following command:

```bash
npm install namecheap-api
```

## Usage

Here is a basic example of how to use the API:

```javascript
import { NameCheap } from "namecheap-api";
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
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

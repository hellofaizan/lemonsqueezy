## 💰 Price

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/products)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const price = await client.retrievePrice({
  id: "...",
});

const prices = await client.listAllPrices();
```

```typescript
import { retrieveProduct, listAllProducts } from "lemonsqueezy.ts/product";

const product = await retrieveProduct({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const products = await listAllProducts({
  apiKey: "YOUR_API_KEY",
});
```

## 💰 Price

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/prices)

```typescript
import { LemonsqueezyClient } from "lmnsqz";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const price = await client.retrievePrice({
  id: "...",
});

const prices = await client.listAllPrices();
```

```typescript
import { retrieveProduct, listAllProducts } from "lmnsqz/price";

const price = await retrieveProduct({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const prices = await listAllProducts({
  apiKey: "YOUR_API_KEY",
});
```

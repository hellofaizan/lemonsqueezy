## ♻️ Subscription Item

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/subscription-items)

```typescript
import { LemonsqueezyClient } from "lmnsqz";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const updatedSubscriptionItem = await client.updateSubscriptionItem({
  // ...
});

const subscriptionItem = await client.retrieveSubscriptionItem({
  id: "...",
});

const subscriptionItems = await client.listAllSubscriptionItems();
```

```typescript
import {
  updateSubscription,
  retrieveSubscription,
  listAllSubscriptions,
} from "lmnsqz/subscription";

const updatedSubscriptionItem = await updateSubscriptionItem({
  apiKey: "YOUR_API_KEY",
  // ...
});

const subscriptionItem = await retrieveSubscriptionItem({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const subscriptionItems = await listAllSubscriptionItems({
  apiKey: "YOUR_API_KEY",
});
```

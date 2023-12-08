<div align="center">
  <h1>
    <br/>
    <br/>
    🍋
    <br />
    lmnsqz
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Unofficial TypeScript SDK for the Lemon Squeezy API</em>
    <br />
    <br />
  
[![Build status](https://img.shields.io/github/actions/workflow/status/alexgrozav/lemonsqueezy/ci.yml?branch=main&label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/alexgrozav/lemonsqueezy/actions/workflows/ci.yml)
[![Package version](https://img.shields.io/npm/v/lmnsqz?label=%20&style=for-the-badge)](https://www.npmjs.com/package/lmnsqz)
[![Package monthly downloads](https://img.shields.io/npm/dm/lmnsqz?color=blueviolet&label=%20&style=for-the-badge)](https://www.npmjs.com/package/lmnsqz)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api)

  </sup>
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install lmnsqz

# yarn
yarn add lmnsqz

# pnpm
pnpm install lmnsqz
```

## 🦄 Usage

Create a new client instance with your API key

```typescript
import { LemonsqueezyClient } from "lmnsqz";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const user = await client.getUser();
// => { attributes: { ... }, id: "1", links: { self: "..." }, type: 'users' }

const stores = await client.listAllStores();
// => [{ attributes: { ... }, id: "1", type: "stores" }]

// And many many more...
```

## 📚 Documentation

To view the documentation on how to use each module, view the README.md for each module:

- [🛒 Checkout](src/modules/checkout#-checkout)
- [🔖 Discount](src/modules/discount#-discount)
- [📄 File](src/modules/file#-file)
- [🔑 License key](src/modules/licenseKey#-license-key)
- [🥇 License key instance](src/modules/licenseKeyInstance#-license-key-instance)
- [🧾 Order](src/modules/order#-order)
- [📦 Order Item](src/modules/orderItem#-orderItem)
- [💎 Product](src/modules/product#-product)
- [🏪 Store](src/modules/store#-store)
- [♻️ Subscription](src/modules/subscription#-subscription)
- [🧘 User](src/modules/user#-user)
- [🧟 Variant](src/modules/variant#-variant)

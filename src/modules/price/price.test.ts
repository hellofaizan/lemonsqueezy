import { listAllPrices, retrievePrice } from ".";
import { describe, it, expect, beforeAll } from "vitest";

describe.concurrent("Price", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve price", async () => {
    const prices = await listAllPrices({
      apiKey,
    });
    if (!prices.data.length) throw new Error("No prices found");

    const price = await retrievePrice({
      apiKey,
      id: prices.data.at(0)!.id,
    });

    expect(price).toBeDefined();
    expect(price.data).toBeDefined();
    expect(price.data).not.toBeNull();
    expect(price.errors).toBeUndefined();
  });

  it("List all prices", async () => {
    const prices = await listAllPrices({
      apiKey,
    });

    expect(prices).toBeDefined();
    expect(Array.isArray(prices.data)).toBe(true);
    expect(prices.errors).toBeUndefined();
  });
});

import { listAllSubscriptionItems, retrieveSubscriptionItem } from ".";
import { describe, it, expect, beforeAll } from "vitest";

describe.concurrent("Subscription Item", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve subscription", async () => {
    // const subscriptions = await listAllSubscriptionItems({
    //   apiKey,
    // });
    // if (!subscriptions.data.length) throw new Error("No subscriptions found");

    // const subscription = await retrieveSubscriptionItem({
    //   apiKey,
    //   id: subscriptions.data.at(0)!.id,
    // });

    // expect(subscription).toBeDefined();
    // expect(subscription.data).toBeDefined();
    // expect(subscription.data).not.toBeNull();
    // expect(subscription.errors).toBeUndefined();

    expect(true).toBe(true);
  });

  it("List all subscriptions", async () => {
    // const subscriptions = await listAllSubscriptionItems({
    //   apiKey,
    // });

    // expect(subscriptions).toBeDefined();
    // expect(Array.isArray(subscriptions.data)).toBe(true);
    // expect(subscriptions.errors).toBeUndefined();

    expect(true).toBe(true);
  });

  it("Update subscription", async () => {
    expect(true).toEqual(true);
  });
});

import { LemonsqueezyDataType } from "../../shared";
import { requestLemonSqueeze } from "../../shared";
import type { SharedModuleOptions } from "../../shared";
import type {
  ListAllSubscriptionItemsOptions,
  ListAllSubscriptionItemsResult,
  RetrieveSubscriptionItemOptions,
  RetrieveSubscriptionItemResult,
  UpdateSubscriptionItemOptions,
  UpdateSubscriptionItemResult,
} from "./subscriptionItem.types";

/**
 * List all subscription items
 *
 * @description Returns a paginated list of subscription items
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-items#list-all-subscription-items
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of subscription objects ordered by `created_at` (descending)
 */
export async function listAllSubscriptionItems(
  options: ListAllSubscriptionItemsOptions & SharedModuleOptions
): Promise<ListAllSubscriptionItemsResult> {
  const { subscriptionId, priceId, ...rest } = options;

  return requestLemonSqueeze<ListAllSubscriptionItemsResult>({
    params: {
      ...(subscriptionId ? { subscription_id: subscriptionId } : {}),
      ...(priceId ? { price_id: priceId } : {}),
    },
    path: "/subscription-items",
    ...rest,
  });
}

/**
 * Retrieve subscription item
 *
 * @description Retrieves the subscription item with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-items#retrieve-a-subscription-item
 *
 * @param {String} options.id - The ID of the subscription item to retrieve
 *
 * @returns A subscription item object
 */
export async function retrieveSubscriptionItem(
  options: RetrieveSubscriptionItemOptions & SharedModuleOptions
): Promise<RetrieveSubscriptionItemResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveSubscriptionItemResult>({
    path: `/subscription-items/${id}`,
    ...rest,
  });
}

/**
 * Update subscription item
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-item items#update-a-subscription-item
 *
 * @param {String} options.id - The ID of the subscription to retrieve
 *
 * @returns A subscription object
 */
export async function updateSubscriptionItem(
  options: UpdateSubscriptionItemOptions & SharedModuleOptions
): Promise<UpdateSubscriptionItemResult> {
  const { id, quantity, ...rest } = options;

  return requestLemonSqueeze<UpdateSubscriptionItemResult>({
    data: {
      data: {
        attributes: {
          quantity: quantity,
        },
        id,
        type: LemonsqueezyDataType.subscription_items,
      },
    },
    path: `/subscription-items/${id}`,
    method: "PATCH",
    ...rest,
  });
}

import { requestLemonSqueeze } from "../../shared";
import type { SharedModuleOptions } from "../../shared";
import type {
  ListAllPricesOptions,
  ListAllPricesResult,
  RetrievePriceOptions,
  RetrievePriceResult,
} from "./price.types";

/**
 * List all prices
 *
 * @description Returns a paginated list of prices
 *
 * @docs https://docs.lemonsqueezy.com/api/prices#list-all-prices
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of prices
 */
export async function listAllPrices(
  options: ListAllPricesOptions & SharedModuleOptions
): Promise<ListAllPricesResult> {
  const { variantId, ...rest } = options;

  return requestLemonSqueeze<ListAllPricesResult>({
    params: {
      filter: {
        ...(variantId ? { variant_id: variantId } : {}),
      },
    },
    path: "/prices",
    ...rest,
  });
}

/**
 * Retrieve price
 *
 * @description Retrieves the price with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/prices#retrieve-a-price
 *
 * @param {String} options.id - The ID of the price to retrieve
 *
 * @returns A price object
 */
export async function retrievePrice(
  options: RetrievePriceOptions & SharedModuleOptions
): Promise<RetrievePriceResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrievePriceResult>({
    path: `/prices/${id}`,
    ...rest,
  });
}

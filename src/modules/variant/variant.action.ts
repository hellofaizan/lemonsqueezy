import { requestLemonSqueeze } from "../../shared";
import type { SharedModuleOptions } from "../../shared";
import type {
  ListAllVariantsOptions,
  ListAllVariantsResult,
  RetrieveVariantOptions,
  RetrieveVariantPriceModelOptions,
  RetrieveVariantPriceModelResult,
  RetrieveVariantResult,
} from "./variant.types";

/**
 * List all variants
 *
 * @description Returns a paginated list of variants
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of variant objects ordered by sort
 */
export async function listAllVariants(
  options: ListAllVariantsOptions & SharedModuleOptions,
): Promise<ListAllVariantsResult> {
  const { productId, status, ...rest } = options;

  return requestLemonSqueeze<ListAllVariantsResult>({
    params: {
      filter: {
        ...(productId ? { product_id: productId } : {}),
        ...(status ? { status } : {}),
      },
    },
    path: "/variants",
    ...rest,
  });
}

/**
 * Retrieve variant
 *
 * @description Retrieves the variant with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
 *
 * @param {String} options.id - The ID of the variant to retrieve
 *
 * @returns A variant object
 */
export async function retrieveVariant(
  options: RetrieveVariantOptions & SharedModuleOptions,
): Promise<RetrieveVariantResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveVariantResult>({
    path: `/variants/${id}`,
    ...rest,
  });
}

/**
 * Retrieve variant price model
 *
 * @description Retrieves the price model for the variant with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
 *
 * @param {String} options.id - The ID of the variant to retrieve
 *
 * @returns A price object
 */
export async function retrieveVariantPriceModel(
  options: RetrieveVariantPriceModelOptions & SharedModuleOptions,
): Promise<RetrieveVariantPriceModelResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveVariantPriceModelResult>({
    path: `/variants/${id}/price-model`,
    ...rest,
  });
}

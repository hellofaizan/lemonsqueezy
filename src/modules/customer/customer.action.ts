import type { SharedModuleOptions } from "../../shared";
import { requestLemonSqueeze } from "../../shared";
import {
  CreateCustomerOptions,
  CreateCustomerResult,
  ListAllCustomersOptions,
  ListAllCustomersResult,
  RetrieveCustomerOptions,
  RetrieveCustomerResult,
  UpdateCustomerOptions,
  UpdateCustomerResult,
} from "./customer.types";

/**
 * List all customers
 *
 * @description Returns a paginated list of customers
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#list-all-customers
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of customer objects ordered by `created_at` (descending)
 */
export async function listAllCustomers(
  options: ListAllCustomersOptions & SharedModuleOptions,
): Promise<ListAllCustomersResult> {
  const { storeId, email, ...rest } = options;

  return requestLemonSqueeze<ListAllCustomersResult>({
    params: {
      ...(storeId ? { store_id: storeId } : {}),
      ...(email ? { email: email } : {}),
    },
    path: "/customers",
    ...rest,
  });
}

/**
 * Retrieve customer
 *
 * @description Retrieves the customer with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#retrieve-a-customer
 *
 * @param {String} options.id - The ID of the customer to retrieve
 *
 * @returns A customer object
 */
export async function retrieveCustomer(
  options: RetrieveCustomerOptions & SharedModuleOptions,
): Promise<RetrieveCustomerResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveCustomerResult>({
    path: `/customers/${id}`,
    ...rest,
  });
}

/**
 * Create customer
 *
 * @description Creates a customer with thedata
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#create-a-customer
 *
 * @returns A customer object
 */
export async function createCustomer(
  options: CreateCustomerOptions & SharedModuleOptions,
): Promise<RetrieveCustomerResult> {
  const { name, email, city, country, region, storeId, ...rest } = options;

  return requestLemonSqueeze<CreateCustomerResult>({
    path: "/customers",
    method: "POST",
    data: {
      data: {
        type: "customers",
        attributes: {
          name,
          email,
          ...(city ? { city } : {}),
          ...(country ? { country } : {}),
          ...(region ? { region } : {}),
        },
        relationships: {
          store: {
            data: {
              id: storeId,
              type: "stores",
            },
          },
        },
      },
    },
    ...rest,
  });
}

/**
 * Update customer
 *
 * @description Updates the customer with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#update-a-customer
 *
 * @returns A customer object
 */
export async function updateCustomer(
  options: UpdateCustomerOptions & SharedModuleOptions,
): Promise<RetrieveCustomerResult> {
  const { id, name, email, city, country, region, status, ...rest } = options;

  return requestLemonSqueeze<UpdateCustomerResult>({
    path: `/customers/${id}`,
    method: "PATCH",
    data: {
      data: {
        attributes: {
          ...(name ? { name } : {}),
          ...(email ? { email } : {}),
          ...(city ? { city } : {}),
          ...(country ? { country } : {}),
          ...(region ? { region } : {}),
          ...(status ? { status } : {}),
        },
        id,
        type: "customers",
      },
    },
    ...rest,
  });
}

import {
  createCustomer,
  listAllCustomers,
  retrieveCustomer,
  updateCustomer,
} from "./customer.action";

export { listAllCustomers, retrieveCustomer, createCustomer, updateCustomer };

export type {
  LemonsqueezyCustomer,
  ListAllCustomersOptions,
  ListAllCustomersResult,
  RetrieveCustomerOptions,
  RetrieveCustomerResult,
  CreateCustomerOptions,
  CreateCustomerResult,
  UpdateCustomerOptions,
  UpdateCustomerResult,
} from "./customer.types";

export default {
  listAllCustomers,
  retrieveCustomer,
  createCustomer,
  updateCustomer,
} as const;

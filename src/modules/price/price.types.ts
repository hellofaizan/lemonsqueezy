import type { LemonsqueezyInterval } from "../../modules";
import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "../../shared";

export interface LemonsqueezyPriceTier {
  last_unit: number | "inf";
  unit_price: number;
  fixed_fee: number;
}

/**
 * @docs https://docs.lemonsqueezy.com/api/prices#the-price-object
 */
export interface LemonsqueezyPrice {
  attributes: {
    variant_id: number;
    category: "subscription";
    scheme: "graduated";
    usage_aggregation: null;
    unit_price: number;
    package_size: number;
    tiers: LemonsqueezyPriceTier[];
    renewal_interval_unit: LemonsqueezyInterval;
    renewal_interval_quantity: number;
    trial_interval_unit: LemonsqueezyInterval;
    trial_interval_quantity: number;
    min_price: number | null;
    suggested_price: number | null;
    tax_code: "eservice";
    created_at: Date;
    updated_at: Date;
  };
  type: LemonsqueezyDataType.prices;
  id: string;
}

export interface ListAllPricesOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return prices belonging to the variant with this ID
   */
  variantId?: string;
}

export type ListAllPricesResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyPrice>
>;

export interface RetrievePriceOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrievePriceResult = BaseLemonsqueezyResponse<LemonsqueezyPrice>;

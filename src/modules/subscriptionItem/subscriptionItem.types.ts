import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "../../shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export interface LemonsqueezySubscriptionItem {
  attributes: {
    /**
     * The ID of the subscription item
     */
    subscription_id: number;
    /**
     * The ID of the price item
     */
    price_id: number;
    /**
     * The quantity of the subscription item
     */
    quantity: number;
    /**
     * Whether the subscription item is usage based
     */
    is_usage_based: boolean;
    /**
     * The created date of the subscription item
     */
    created_at: Date;
    /**
     * The updated date of the subscription item
     */
    updated_at: Date;
  };
  type: LemonsqueezyDataType.subscription_items;
  id: string;
}

export interface ListAllSubscriptionItemsOptions
  extends SharedLemonsqueezyOptions {
  /**
   * Only return subscription items belonging to the subscription with this ID
   */
  subscriptionId?: string;

  /**
   * Only return subscription items belonging to the price with this ID
   */
  priceId?: string;
}

export type ListAllSubscriptionItemsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezySubscriptionItem>
>;

export interface RetrieveSubscriptionItemOptions
  extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveSubscriptionItemResult =
  BaseLemonsqueezyResponse<LemonsqueezySubscriptionItem>;

export interface UpdateSubscriptionItemOptions
  extends SharedLemonsqueezyOptions {
  id: string;
  /**
   * The quantity of the subscription item
   */
  quantity: number;
}

export type UpdateSubscriptionItemResult =
  BaseLemonsqueezyResponse<LemonsqueezySubscriptionItem>;

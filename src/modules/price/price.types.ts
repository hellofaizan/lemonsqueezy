import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/prices#the-price-object
 */
export interface LemonsqueezyPrice {
  attributes: {
    /**
     * A URL to purchase this price using the Lemon Squeezy checkout
     */
    buy_now_url: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * The description of the price in HTML
     */
    description: string;
    /**
     * If this price has multiple variants, this will be a positive integer in cents representing the price of the cheapest variant.
     *
     * Otherwise, it will be `null`
     */
    from_price: null;
    /**
     * A URL to the large thumbnail image for this price (if one exists).
     *
     * The image will be 1000x1000px in size
     */
    large_thumb_url: string;
    /**
     * The name of the price
     */
    name: string;
    /**
     * Has the value true if this is a “pay what you want” price where the price can be set by the customer at checkout
     */
    pay_what_you_want: false;
    /**
     * A human-readable string representing the price of the price (e.g. `$9.99`)
     */
    price_formatted: string;
    /**
     * A positive integer in cents representing the price of the price
     */
    price: number;
    /**
     * The slug used to identify the price
     */
    slug: string;
    /**
     * The formatted status of the price
     */
    status_formatted: string;
    /**
     * The status of the price. Either `draft` or `published`
     */
    status: "draft" | "published";
    /**
     * The ID of the store this price belongs to
     */
    store_id: number;
    /**
     * A URL to the thumbnail image for this price (if one exists).
     *
     * The image will be 100x100px in size
     */
    thumb_url: string;
    /**
     * If this price has multiple variants, this will be a positive integer in cents representing the price of the most expensive variant.
     *
     * Otherwise, it will be `null`
     */
    to_price: null;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
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

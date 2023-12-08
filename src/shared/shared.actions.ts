import qs from "qs";
import { fetch } from "undici";
import { LemonsqueezyDataType } from "~/shared";
import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyOptions,
  PaginatedBaseLemonsqueezyResponse,
} from "~/shared";

export async function requestLemonSqueeze<
  TResponse extends
    | BaseLemonsqueezyResponse<any>
    | PaginatedBaseLemonsqueezyResponse<any>,
  TData extends Record<string, any> = Record<string, any>
>({
  apiKey,
  apiVersion = "v1",
  baseUrl = "https://api.lemonsqueezy.com",
  data,
  headers,
  include,
  method = "GET",
  page,
  params,
  path,
}: LemonsqueezyOptions<TData>): Promise<TResponse> {
  try {
    const url = new URL(`${apiVersion}${path}`, baseUrl);
    const query = {
      ...(include
        ? { include: include.map((i) => LemonsqueezyDataType[i]).join(",") }
        : {}),
      ...(page ? { page: page.toString() } : {}),
      ...params,
    };
    const queryString =
      Object.keys(query).length > 0 ? `?${qs.stringify(query)}` : "";

    const response = await fetch(`${url.href}${queryString}`, {
      headers: {
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/vnd.api+json",
        ...headers,
      },
      method,
      ...(data && method !== "GET"
        ? {
            body: JSON.stringify(data),
          }
        : {}),
    });
    if (!response.ok) {
      const errorsJson = (await response.json()) as {
        errors: Array<{
          detail: string;
          status: number;
          title: string;
        }>;
      };
      throw {
        status: response.status,
        message: response.statusText,
        errors: errorsJson.errors,
      };
    }

    const json = (await response.json()) as TResponse;
    if (json.errors && json.errors.length > 0) throw json;

    return json;
  } catch (error) {
    throw error;
  }
}

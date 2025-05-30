/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The order to sort the response by
 */
export const GetResultsForClassOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetResultsForClassOrderBy = ClosedEnum<
  typeof GetResultsForClassOrderBy
>;

export type GetResultsForClassRequest = {
  /**
   * The sourcedId of the class
   */
  sourcedId: string;
  /**
   * Comma-separated list of fields to include in the response
   */
  fields?: string | undefined;
  /**
   * The maximum number of items to return in the paginated response
   */
  limit?: number | undefined;
  /**
   * The number of items to skip in the paginated response
   */
  offset?: number | undefined;
  /**
   * The field to sort the response by
   */
  sort?: string | undefined;
  /**
   * The order to sort the response by
   */
  orderBy?: GetResultsForClassOrderBy | undefined;
  /**
   * The filter to apply to the response
   */
  filter?: string | undefined;
  /**
   * The search query to apply to the response
   */
  search?: string | undefined;
};

/**
 * Successful response containing a collection of results for the class
 */
export type GetResultsForClassResponseBody = {
  results: Array<components.Result>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetResultsForClassResponse = {
  result: GetResultsForClassResponseBody;
};

/** @internal */
export const GetResultsForClassOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetResultsForClassOrderBy
> = z.nativeEnum(GetResultsForClassOrderBy);

/** @internal */
export const GetResultsForClassOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetResultsForClassOrderBy
> = GetResultsForClassOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResultsForClassOrderBy$ {
  /** @deprecated use `GetResultsForClassOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetResultsForClassOrderBy$inboundSchema;
  /** @deprecated use `GetResultsForClassOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetResultsForClassOrderBy$outboundSchema;
}

/** @internal */
export const GetResultsForClassRequest$inboundSchema: z.ZodType<
  GetResultsForClassRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetResultsForClassOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetResultsForClassRequest$Outbound = {
  sourcedId: string;
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetResultsForClassRequest$outboundSchema: z.ZodType<
  GetResultsForClassRequest$Outbound,
  z.ZodTypeDef,
  GetResultsForClassRequest
> = z.object({
  sourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetResultsForClassOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResultsForClassRequest$ {
  /** @deprecated use `GetResultsForClassRequest$inboundSchema` instead. */
  export const inboundSchema = GetResultsForClassRequest$inboundSchema;
  /** @deprecated use `GetResultsForClassRequest$outboundSchema` instead. */
  export const outboundSchema = GetResultsForClassRequest$outboundSchema;
  /** @deprecated use `GetResultsForClassRequest$Outbound` instead. */
  export type Outbound = GetResultsForClassRequest$Outbound;
}

export function getResultsForClassRequestToJSON(
  getResultsForClassRequest: GetResultsForClassRequest,
): string {
  return JSON.stringify(
    GetResultsForClassRequest$outboundSchema.parse(getResultsForClassRequest),
  );
}

export function getResultsForClassRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResultsForClassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResultsForClassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResultsForClassRequest' from JSON`,
  );
}

/** @internal */
export const GetResultsForClassResponseBody$inboundSchema: z.ZodType<
  GetResultsForClassResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(components.Result$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetResultsForClassResponseBody$Outbound = {
  results: Array<components.Result$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetResultsForClassResponseBody$outboundSchema: z.ZodType<
  GetResultsForClassResponseBody$Outbound,
  z.ZodTypeDef,
  GetResultsForClassResponseBody
> = z.object({
  results: z.array(components.Result$outboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResultsForClassResponseBody$ {
  /** @deprecated use `GetResultsForClassResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetResultsForClassResponseBody$inboundSchema;
  /** @deprecated use `GetResultsForClassResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetResultsForClassResponseBody$outboundSchema;
  /** @deprecated use `GetResultsForClassResponseBody$Outbound` instead. */
  export type Outbound = GetResultsForClassResponseBody$Outbound;
}

export function getResultsForClassResponseBodyToJSON(
  getResultsForClassResponseBody: GetResultsForClassResponseBody,
): string {
  return JSON.stringify(
    GetResultsForClassResponseBody$outboundSchema.parse(
      getResultsForClassResponseBody,
    ),
  );
}

export function getResultsForClassResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetResultsForClassResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResultsForClassResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResultsForClassResponseBody' from JSON`,
  );
}

/** @internal */
export const GetResultsForClassResponse$inboundSchema: z.ZodType<
  GetResultsForClassResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetResultsForClassResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetResultsForClassResponse$Outbound = {
  Result: GetResultsForClassResponseBody$Outbound;
};

/** @internal */
export const GetResultsForClassResponse$outboundSchema: z.ZodType<
  GetResultsForClassResponse$Outbound,
  z.ZodTypeDef,
  GetResultsForClassResponse
> = z.object({
  result: z.lazy(() => GetResultsForClassResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResultsForClassResponse$ {
  /** @deprecated use `GetResultsForClassResponse$inboundSchema` instead. */
  export const inboundSchema = GetResultsForClassResponse$inboundSchema;
  /** @deprecated use `GetResultsForClassResponse$outboundSchema` instead. */
  export const outboundSchema = GetResultsForClassResponse$outboundSchema;
  /** @deprecated use `GetResultsForClassResponse$Outbound` instead. */
  export type Outbound = GetResultsForClassResponse$Outbound;
}

export function getResultsForClassResponseToJSON(
  getResultsForClassResponse: GetResultsForClassResponse,
): string {
  return JSON.stringify(
    GetResultsForClassResponse$outboundSchema.parse(getResultsForClassResponse),
  );
}

export function getResultsForClassResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetResultsForClassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResultsForClassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResultsForClassResponse' from JSON`,
  );
}

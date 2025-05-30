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
export const GetClassesForStudentOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetClassesForStudentOrderBy = ClosedEnum<
  typeof GetClassesForStudentOrderBy
>;

export type GetClassesForStudentRequest = {
  /**
   * The sourcedId of the student
   */
  studentSourcedId: string;
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
  orderBy?: GetClassesForStudentOrderBy | undefined;
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
 * Successful response containing a collection of classes for the student
 */
export type GetClassesForStudentResponseBody = {
  classes: Array<components.Class>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetClassesForStudentResponse = {
  result: GetClassesForStudentResponseBody;
};

/** @internal */
export const GetClassesForStudentOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetClassesForStudentOrderBy
> = z.nativeEnum(GetClassesForStudentOrderBy);

/** @internal */
export const GetClassesForStudentOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetClassesForStudentOrderBy
> = GetClassesForStudentOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForStudentOrderBy$ {
  /** @deprecated use `GetClassesForStudentOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetClassesForStudentOrderBy$inboundSchema;
  /** @deprecated use `GetClassesForStudentOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetClassesForStudentOrderBy$outboundSchema;
}

/** @internal */
export const GetClassesForStudentRequest$inboundSchema: z.ZodType<
  GetClassesForStudentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  studentSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetClassesForStudentOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetClassesForStudentRequest$Outbound = {
  studentSourcedId: string;
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetClassesForStudentRequest$outboundSchema: z.ZodType<
  GetClassesForStudentRequest$Outbound,
  z.ZodTypeDef,
  GetClassesForStudentRequest
> = z.object({
  studentSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetClassesForStudentOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForStudentRequest$ {
  /** @deprecated use `GetClassesForStudentRequest$inboundSchema` instead. */
  export const inboundSchema = GetClassesForStudentRequest$inboundSchema;
  /** @deprecated use `GetClassesForStudentRequest$outboundSchema` instead. */
  export const outboundSchema = GetClassesForStudentRequest$outboundSchema;
  /** @deprecated use `GetClassesForStudentRequest$Outbound` instead. */
  export type Outbound = GetClassesForStudentRequest$Outbound;
}

export function getClassesForStudentRequestToJSON(
  getClassesForStudentRequest: GetClassesForStudentRequest,
): string {
  return JSON.stringify(
    GetClassesForStudentRequest$outboundSchema.parse(
      getClassesForStudentRequest,
    ),
  );
}

export function getClassesForStudentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForStudentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForStudentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForStudentRequest' from JSON`,
  );
}

/** @internal */
export const GetClassesForStudentResponseBody$inboundSchema: z.ZodType<
  GetClassesForStudentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  classes: z.array(components.Class$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetClassesForStudentResponseBody$Outbound = {
  classes: Array<components.Class$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetClassesForStudentResponseBody$outboundSchema: z.ZodType<
  GetClassesForStudentResponseBody$Outbound,
  z.ZodTypeDef,
  GetClassesForStudentResponseBody
> = z.object({
  classes: z.array(components.Class$outboundSchema),
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
export namespace GetClassesForStudentResponseBody$ {
  /** @deprecated use `GetClassesForStudentResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetClassesForStudentResponseBody$inboundSchema;
  /** @deprecated use `GetClassesForStudentResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetClassesForStudentResponseBody$outboundSchema;
  /** @deprecated use `GetClassesForStudentResponseBody$Outbound` instead. */
  export type Outbound = GetClassesForStudentResponseBody$Outbound;
}

export function getClassesForStudentResponseBodyToJSON(
  getClassesForStudentResponseBody: GetClassesForStudentResponseBody,
): string {
  return JSON.stringify(
    GetClassesForStudentResponseBody$outboundSchema.parse(
      getClassesForStudentResponseBody,
    ),
  );
}

export function getClassesForStudentResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForStudentResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForStudentResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForStudentResponseBody' from JSON`,
  );
}

/** @internal */
export const GetClassesForStudentResponse$inboundSchema: z.ZodType<
  GetClassesForStudentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetClassesForStudentResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetClassesForStudentResponse$Outbound = {
  Result: GetClassesForStudentResponseBody$Outbound;
};

/** @internal */
export const GetClassesForStudentResponse$outboundSchema: z.ZodType<
  GetClassesForStudentResponse$Outbound,
  z.ZodTypeDef,
  GetClassesForStudentResponse
> = z.object({
  result: z.lazy(() => GetClassesForStudentResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForStudentResponse$ {
  /** @deprecated use `GetClassesForStudentResponse$inboundSchema` instead. */
  export const inboundSchema = GetClassesForStudentResponse$inboundSchema;
  /** @deprecated use `GetClassesForStudentResponse$outboundSchema` instead. */
  export const outboundSchema = GetClassesForStudentResponse$outboundSchema;
  /** @deprecated use `GetClassesForStudentResponse$Outbound` instead. */
  export type Outbound = GetClassesForStudentResponse$Outbound;
}

export function getClassesForStudentResponseToJSON(
  getClassesForStudentResponse: GetClassesForStudentResponse,
): string {
  return JSON.stringify(
    GetClassesForStudentResponse$outboundSchema.parse(
      getClassesForStudentResponse,
    ),
  );
}

export function getClassesForStudentResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForStudentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForStudentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForStudentResponse' from JSON`,
  );
}

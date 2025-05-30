/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTermRequest = {
  /**
   * The sourcedId of the term
   */
  sourcedId: string;
};

/**
 * Successful response with the term
 */
export type GetTermResponse = {
  /**
   * Represents an academic session.
   */
  term: components.AcademicSession;
};

/** @internal */
export const GetTermRequest$inboundSchema: z.ZodType<
  GetTermRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetTermRequest$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetTermRequest$outboundSchema: z.ZodType<
  GetTermRequest$Outbound,
  z.ZodTypeDef,
  GetTermRequest
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTermRequest$ {
  /** @deprecated use `GetTermRequest$inboundSchema` instead. */
  export const inboundSchema = GetTermRequest$inboundSchema;
  /** @deprecated use `GetTermRequest$outboundSchema` instead. */
  export const outboundSchema = GetTermRequest$outboundSchema;
  /** @deprecated use `GetTermRequest$Outbound` instead. */
  export type Outbound = GetTermRequest$Outbound;
}

export function getTermRequestToJSON(getTermRequest: GetTermRequest): string {
  return JSON.stringify(GetTermRequest$outboundSchema.parse(getTermRequest));
}

export function getTermRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTermRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTermRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTermRequest' from JSON`,
  );
}

/** @internal */
export const GetTermResponse$inboundSchema: z.ZodType<
  GetTermResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  term: components.AcademicSession$inboundSchema,
});

/** @internal */
export type GetTermResponse$Outbound = {
  term: components.AcademicSession$Outbound;
};

/** @internal */
export const GetTermResponse$outboundSchema: z.ZodType<
  GetTermResponse$Outbound,
  z.ZodTypeDef,
  GetTermResponse
> = z.object({
  term: components.AcademicSession$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTermResponse$ {
  /** @deprecated use `GetTermResponse$inboundSchema` instead. */
  export const inboundSchema = GetTermResponse$inboundSchema;
  /** @deprecated use `GetTermResponse$outboundSchema` instead. */
  export const outboundSchema = GetTermResponse$outboundSchema;
  /** @deprecated use `GetTermResponse$Outbound` instead. */
  export type Outbound = GetTermResponse$Outbound;
}

export function getTermResponseToJSON(
  getTermResponse: GetTermResponse,
): string {
  return JSON.stringify(GetTermResponse$outboundSchema.parse(getTermResponse));
}

export function getTermResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTermResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTermResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTermResponse' from JSON`,
  );
}

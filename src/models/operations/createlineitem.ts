/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateLineItemRequest = {
  /**
   * Represents a line item.
   */
  lineItem: components.LineItem;
};

export type CreateLineItemSourcedIdPairs = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/**
 * Line item successfully created
 */
export type CreateLineItemResponse = {
  sourcedIdPairs: CreateLineItemSourcedIdPairs;
};

/** @internal */
export const CreateLineItemRequest$inboundSchema: z.ZodType<
  CreateLineItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  lineItem: components.LineItem$inboundSchema,
});

/** @internal */
export type CreateLineItemRequest$Outbound = {
  lineItem: components.LineItem$Outbound;
};

/** @internal */
export const CreateLineItemRequest$outboundSchema: z.ZodType<
  CreateLineItemRequest$Outbound,
  z.ZodTypeDef,
  CreateLineItemRequest
> = z.object({
  lineItem: components.LineItem$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLineItemRequest$ {
  /** @deprecated use `CreateLineItemRequest$inboundSchema` instead. */
  export const inboundSchema = CreateLineItemRequest$inboundSchema;
  /** @deprecated use `CreateLineItemRequest$outboundSchema` instead. */
  export const outboundSchema = CreateLineItemRequest$outboundSchema;
  /** @deprecated use `CreateLineItemRequest$Outbound` instead. */
  export type Outbound = CreateLineItemRequest$Outbound;
}

export function createLineItemRequestToJSON(
  createLineItemRequest: CreateLineItemRequest,
): string {
  return JSON.stringify(
    CreateLineItemRequest$outboundSchema.parse(createLineItemRequest),
  );
}

export function createLineItemRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateLineItemRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLineItemRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLineItemRequest' from JSON`,
  );
}

/** @internal */
export const CreateLineItemSourcedIdPairs$inboundSchema: z.ZodType<
  CreateLineItemSourcedIdPairs,
  z.ZodTypeDef,
  unknown
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/** @internal */
export type CreateLineItemSourcedIdPairs$Outbound = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/** @internal */
export const CreateLineItemSourcedIdPairs$outboundSchema: z.ZodType<
  CreateLineItemSourcedIdPairs$Outbound,
  z.ZodTypeDef,
  CreateLineItemSourcedIdPairs
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLineItemSourcedIdPairs$ {
  /** @deprecated use `CreateLineItemSourcedIdPairs$inboundSchema` instead. */
  export const inboundSchema = CreateLineItemSourcedIdPairs$inboundSchema;
  /** @deprecated use `CreateLineItemSourcedIdPairs$outboundSchema` instead. */
  export const outboundSchema = CreateLineItemSourcedIdPairs$outboundSchema;
  /** @deprecated use `CreateLineItemSourcedIdPairs$Outbound` instead. */
  export type Outbound = CreateLineItemSourcedIdPairs$Outbound;
}

export function createLineItemSourcedIdPairsToJSON(
  createLineItemSourcedIdPairs: CreateLineItemSourcedIdPairs,
): string {
  return JSON.stringify(
    CreateLineItemSourcedIdPairs$outboundSchema.parse(
      createLineItemSourcedIdPairs,
    ),
  );
}

export function createLineItemSourcedIdPairsFromJSON(
  jsonString: string,
): SafeParseResult<CreateLineItemSourcedIdPairs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLineItemSourcedIdPairs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLineItemSourcedIdPairs' from JSON`,
  );
}

/** @internal */
export const CreateLineItemResponse$inboundSchema: z.ZodType<
  CreateLineItemResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedIdPairs: z.lazy(() => CreateLineItemSourcedIdPairs$inboundSchema),
});

/** @internal */
export type CreateLineItemResponse$Outbound = {
  sourcedIdPairs: CreateLineItemSourcedIdPairs$Outbound;
};

/** @internal */
export const CreateLineItemResponse$outboundSchema: z.ZodType<
  CreateLineItemResponse$Outbound,
  z.ZodTypeDef,
  CreateLineItemResponse
> = z.object({
  sourcedIdPairs: z.lazy(() => CreateLineItemSourcedIdPairs$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLineItemResponse$ {
  /** @deprecated use `CreateLineItemResponse$inboundSchema` instead. */
  export const inboundSchema = CreateLineItemResponse$inboundSchema;
  /** @deprecated use `CreateLineItemResponse$outboundSchema` instead. */
  export const outboundSchema = CreateLineItemResponse$outboundSchema;
  /** @deprecated use `CreateLineItemResponse$Outbound` instead. */
  export type Outbound = CreateLineItemResponse$Outbound;
}

export function createLineItemResponseToJSON(
  createLineItemResponse: CreateLineItemResponse,
): string {
  return JSON.stringify(
    CreateLineItemResponse$outboundSchema.parse(createLineItemResponse),
  );
}

export function createLineItemResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateLineItemResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLineItemResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLineItemResponse' from JSON`,
  );
}

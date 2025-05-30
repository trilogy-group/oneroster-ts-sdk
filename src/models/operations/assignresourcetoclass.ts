/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AssignResourceToClassResource = {
  sourcedId: string;
  dateAssigned?: string | undefined;
};

export type AssignResourceToClassRequestBody = {
  resource: AssignResourceToClassResource;
};

export type AssignResourceToClassRequest = {
  /**
   * The sourcedId of the class
   */
  classSourcedId: string;
  requestBody: AssignResourceToClassRequestBody;
};

export type AssignResourceToClassSourcedIdPairs = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/**
 * Resource successfully assigned to class
 */
export type AssignResourceToClassResponse = {
  sourcedIdPairs: AssignResourceToClassSourcedIdPairs;
};

/** @internal */
export const AssignResourceToClassResource$inboundSchema: z.ZodType<
  AssignResourceToClassResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  dateAssigned: z.string().optional(),
});

/** @internal */
export type AssignResourceToClassResource$Outbound = {
  sourcedId: string;
  dateAssigned?: string | undefined;
};

/** @internal */
export const AssignResourceToClassResource$outboundSchema: z.ZodType<
  AssignResourceToClassResource$Outbound,
  z.ZodTypeDef,
  AssignResourceToClassResource
> = z.object({
  sourcedId: z.string(),
  dateAssigned: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignResourceToClassResource$ {
  /** @deprecated use `AssignResourceToClassResource$inboundSchema` instead. */
  export const inboundSchema = AssignResourceToClassResource$inboundSchema;
  /** @deprecated use `AssignResourceToClassResource$outboundSchema` instead. */
  export const outboundSchema = AssignResourceToClassResource$outboundSchema;
  /** @deprecated use `AssignResourceToClassResource$Outbound` instead. */
  export type Outbound = AssignResourceToClassResource$Outbound;
}

export function assignResourceToClassResourceToJSON(
  assignResourceToClassResource: AssignResourceToClassResource,
): string {
  return JSON.stringify(
    AssignResourceToClassResource$outboundSchema.parse(
      assignResourceToClassResource,
    ),
  );
}

export function assignResourceToClassResourceFromJSON(
  jsonString: string,
): SafeParseResult<AssignResourceToClassResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignResourceToClassResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignResourceToClassResource' from JSON`,
  );
}

/** @internal */
export const AssignResourceToClassRequestBody$inboundSchema: z.ZodType<
  AssignResourceToClassRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.lazy(() => AssignResourceToClassResource$inboundSchema),
});

/** @internal */
export type AssignResourceToClassRequestBody$Outbound = {
  resource: AssignResourceToClassResource$Outbound;
};

/** @internal */
export const AssignResourceToClassRequestBody$outboundSchema: z.ZodType<
  AssignResourceToClassRequestBody$Outbound,
  z.ZodTypeDef,
  AssignResourceToClassRequestBody
> = z.object({
  resource: z.lazy(() => AssignResourceToClassResource$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignResourceToClassRequestBody$ {
  /** @deprecated use `AssignResourceToClassRequestBody$inboundSchema` instead. */
  export const inboundSchema = AssignResourceToClassRequestBody$inboundSchema;
  /** @deprecated use `AssignResourceToClassRequestBody$outboundSchema` instead. */
  export const outboundSchema = AssignResourceToClassRequestBody$outboundSchema;
  /** @deprecated use `AssignResourceToClassRequestBody$Outbound` instead. */
  export type Outbound = AssignResourceToClassRequestBody$Outbound;
}

export function assignResourceToClassRequestBodyToJSON(
  assignResourceToClassRequestBody: AssignResourceToClassRequestBody,
): string {
  return JSON.stringify(
    AssignResourceToClassRequestBody$outboundSchema.parse(
      assignResourceToClassRequestBody,
    ),
  );
}

export function assignResourceToClassRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AssignResourceToClassRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignResourceToClassRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignResourceToClassRequestBody' from JSON`,
  );
}

/** @internal */
export const AssignResourceToClassRequest$inboundSchema: z.ZodType<
  AssignResourceToClassRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  classSourcedId: z.string(),
  RequestBody: z.lazy(() => AssignResourceToClassRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AssignResourceToClassRequest$Outbound = {
  classSourcedId: string;
  RequestBody: AssignResourceToClassRequestBody$Outbound;
};

/** @internal */
export const AssignResourceToClassRequest$outboundSchema: z.ZodType<
  AssignResourceToClassRequest$Outbound,
  z.ZodTypeDef,
  AssignResourceToClassRequest
> = z.object({
  classSourcedId: z.string(),
  requestBody: z.lazy(() => AssignResourceToClassRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignResourceToClassRequest$ {
  /** @deprecated use `AssignResourceToClassRequest$inboundSchema` instead. */
  export const inboundSchema = AssignResourceToClassRequest$inboundSchema;
  /** @deprecated use `AssignResourceToClassRequest$outboundSchema` instead. */
  export const outboundSchema = AssignResourceToClassRequest$outboundSchema;
  /** @deprecated use `AssignResourceToClassRequest$Outbound` instead. */
  export type Outbound = AssignResourceToClassRequest$Outbound;
}

export function assignResourceToClassRequestToJSON(
  assignResourceToClassRequest: AssignResourceToClassRequest,
): string {
  return JSON.stringify(
    AssignResourceToClassRequest$outboundSchema.parse(
      assignResourceToClassRequest,
    ),
  );
}

export function assignResourceToClassRequestFromJSON(
  jsonString: string,
): SafeParseResult<AssignResourceToClassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignResourceToClassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignResourceToClassRequest' from JSON`,
  );
}

/** @internal */
export const AssignResourceToClassSourcedIdPairs$inboundSchema: z.ZodType<
  AssignResourceToClassSourcedIdPairs,
  z.ZodTypeDef,
  unknown
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/** @internal */
export type AssignResourceToClassSourcedIdPairs$Outbound = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/** @internal */
export const AssignResourceToClassSourcedIdPairs$outboundSchema: z.ZodType<
  AssignResourceToClassSourcedIdPairs$Outbound,
  z.ZodTypeDef,
  AssignResourceToClassSourcedIdPairs
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignResourceToClassSourcedIdPairs$ {
  /** @deprecated use `AssignResourceToClassSourcedIdPairs$inboundSchema` instead. */
  export const inboundSchema =
    AssignResourceToClassSourcedIdPairs$inboundSchema;
  /** @deprecated use `AssignResourceToClassSourcedIdPairs$outboundSchema` instead. */
  export const outboundSchema =
    AssignResourceToClassSourcedIdPairs$outboundSchema;
  /** @deprecated use `AssignResourceToClassSourcedIdPairs$Outbound` instead. */
  export type Outbound = AssignResourceToClassSourcedIdPairs$Outbound;
}

export function assignResourceToClassSourcedIdPairsToJSON(
  assignResourceToClassSourcedIdPairs: AssignResourceToClassSourcedIdPairs,
): string {
  return JSON.stringify(
    AssignResourceToClassSourcedIdPairs$outboundSchema.parse(
      assignResourceToClassSourcedIdPairs,
    ),
  );
}

export function assignResourceToClassSourcedIdPairsFromJSON(
  jsonString: string,
): SafeParseResult<AssignResourceToClassSourcedIdPairs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AssignResourceToClassSourcedIdPairs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignResourceToClassSourcedIdPairs' from JSON`,
  );
}

/** @internal */
export const AssignResourceToClassResponse$inboundSchema: z.ZodType<
  AssignResourceToClassResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedIdPairs: z.lazy(() =>
    AssignResourceToClassSourcedIdPairs$inboundSchema
  ),
});

/** @internal */
export type AssignResourceToClassResponse$Outbound = {
  sourcedIdPairs: AssignResourceToClassSourcedIdPairs$Outbound;
};

/** @internal */
export const AssignResourceToClassResponse$outboundSchema: z.ZodType<
  AssignResourceToClassResponse$Outbound,
  z.ZodTypeDef,
  AssignResourceToClassResponse
> = z.object({
  sourcedIdPairs: z.lazy(() =>
    AssignResourceToClassSourcedIdPairs$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignResourceToClassResponse$ {
  /** @deprecated use `AssignResourceToClassResponse$inboundSchema` instead. */
  export const inboundSchema = AssignResourceToClassResponse$inboundSchema;
  /** @deprecated use `AssignResourceToClassResponse$outboundSchema` instead. */
  export const outboundSchema = AssignResourceToClassResponse$outboundSchema;
  /** @deprecated use `AssignResourceToClassResponse$Outbound` instead. */
  export type Outbound = AssignResourceToClassResponse$Outbound;
}

export function assignResourceToClassResponseToJSON(
  assignResourceToClassResponse: AssignResourceToClassResponse,
): string {
  return JSON.stringify(
    AssignResourceToClassResponse$outboundSchema.parse(
      assignResourceToClassResponse,
    ),
  );
}

export function assignResourceToClassResponseFromJSON(
  jsonString: string,
): SafeParseResult<AssignResourceToClassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignResourceToClassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignResourceToClassResponse' from JSON`,
  );
}

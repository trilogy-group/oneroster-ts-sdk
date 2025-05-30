/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ScoreScaleStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type ScoreScaleStatus = ClosedEnum<typeof ScoreScaleStatus>;

export type ScoreScaleClass = {
  sourcedId: string;
};

export type ScoreScaleCourse = {
  sourcedId: string;
};

export type ScoreScaleValue = {
  itemValueLHS: string;
  itemValueRHS: string;
  value?: string | undefined;
  description?: string | undefined;
};

/**
 * Represents a score scale.
 */
export type ScoreScale = {
  sourcedId?: string | undefined;
  status: ScoreScaleStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  type: string;
  class: ScoreScaleClass;
  course?: ScoreScaleCourse | null | undefined;
  scoreScaleValue: Array<ScoreScaleValue>;
};

/** @internal */
export const ScoreScaleStatus$inboundSchema: z.ZodNativeEnum<
  typeof ScoreScaleStatus
> = z.nativeEnum(ScoreScaleStatus);

/** @internal */
export const ScoreScaleStatus$outboundSchema: z.ZodNativeEnum<
  typeof ScoreScaleStatus
> = ScoreScaleStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoreScaleStatus$ {
  /** @deprecated use `ScoreScaleStatus$inboundSchema` instead. */
  export const inboundSchema = ScoreScaleStatus$inboundSchema;
  /** @deprecated use `ScoreScaleStatus$outboundSchema` instead. */
  export const outboundSchema = ScoreScaleStatus$outboundSchema;
}

/** @internal */
export const ScoreScaleClass$inboundSchema: z.ZodType<
  ScoreScaleClass,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type ScoreScaleClass$Outbound = {
  sourcedId: string;
};

/** @internal */
export const ScoreScaleClass$outboundSchema: z.ZodType<
  ScoreScaleClass$Outbound,
  z.ZodTypeDef,
  ScoreScaleClass
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoreScaleClass$ {
  /** @deprecated use `ScoreScaleClass$inboundSchema` instead. */
  export const inboundSchema = ScoreScaleClass$inboundSchema;
  /** @deprecated use `ScoreScaleClass$outboundSchema` instead. */
  export const outboundSchema = ScoreScaleClass$outboundSchema;
  /** @deprecated use `ScoreScaleClass$Outbound` instead. */
  export type Outbound = ScoreScaleClass$Outbound;
}

export function scoreScaleClassToJSON(
  scoreScaleClass: ScoreScaleClass,
): string {
  return JSON.stringify(ScoreScaleClass$outboundSchema.parse(scoreScaleClass));
}

export function scoreScaleClassFromJSON(
  jsonString: string,
): SafeParseResult<ScoreScaleClass, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScoreScaleClass$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScoreScaleClass' from JSON`,
  );
}

/** @internal */
export const ScoreScaleCourse$inboundSchema: z.ZodType<
  ScoreScaleCourse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type ScoreScaleCourse$Outbound = {
  sourcedId: string;
};

/** @internal */
export const ScoreScaleCourse$outboundSchema: z.ZodType<
  ScoreScaleCourse$Outbound,
  z.ZodTypeDef,
  ScoreScaleCourse
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoreScaleCourse$ {
  /** @deprecated use `ScoreScaleCourse$inboundSchema` instead. */
  export const inboundSchema = ScoreScaleCourse$inboundSchema;
  /** @deprecated use `ScoreScaleCourse$outboundSchema` instead. */
  export const outboundSchema = ScoreScaleCourse$outboundSchema;
  /** @deprecated use `ScoreScaleCourse$Outbound` instead. */
  export type Outbound = ScoreScaleCourse$Outbound;
}

export function scoreScaleCourseToJSON(
  scoreScaleCourse: ScoreScaleCourse,
): string {
  return JSON.stringify(
    ScoreScaleCourse$outboundSchema.parse(scoreScaleCourse),
  );
}

export function scoreScaleCourseFromJSON(
  jsonString: string,
): SafeParseResult<ScoreScaleCourse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScoreScaleCourse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScoreScaleCourse' from JSON`,
  );
}

/** @internal */
export const ScoreScaleValue$inboundSchema: z.ZodType<
  ScoreScaleValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  itemValueLHS: z.string(),
  itemValueRHS: z.string(),
  value: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type ScoreScaleValue$Outbound = {
  itemValueLHS: string;
  itemValueRHS: string;
  value?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const ScoreScaleValue$outboundSchema: z.ZodType<
  ScoreScaleValue$Outbound,
  z.ZodTypeDef,
  ScoreScaleValue
> = z.object({
  itemValueLHS: z.string(),
  itemValueRHS: z.string(),
  value: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoreScaleValue$ {
  /** @deprecated use `ScoreScaleValue$inboundSchema` instead. */
  export const inboundSchema = ScoreScaleValue$inboundSchema;
  /** @deprecated use `ScoreScaleValue$outboundSchema` instead. */
  export const outboundSchema = ScoreScaleValue$outboundSchema;
  /** @deprecated use `ScoreScaleValue$Outbound` instead. */
  export type Outbound = ScoreScaleValue$Outbound;
}

export function scoreScaleValueToJSON(
  scoreScaleValue: ScoreScaleValue,
): string {
  return JSON.stringify(ScoreScaleValue$outboundSchema.parse(scoreScaleValue));
}

export function scoreScaleValueFromJSON(
  jsonString: string,
): SafeParseResult<ScoreScaleValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScoreScaleValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScoreScaleValue' from JSON`,
  );
}

/** @internal */
export const ScoreScale$inboundSchema: z.ZodType<
  ScoreScale,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string().optional(),
  status: ScoreScaleStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  type: z.string(),
  class: z.lazy(() => ScoreScaleClass$inboundSchema),
  course: z.nullable(z.lazy(() => ScoreScaleCourse$inboundSchema)).optional(),
  scoreScaleValue: z.array(z.lazy(() => ScoreScaleValue$inboundSchema)),
});

/** @internal */
export type ScoreScale$Outbound = {
  sourcedId?: string | undefined;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  type: string;
  class: ScoreScaleClass$Outbound;
  course?: ScoreScaleCourse$Outbound | null | undefined;
  scoreScaleValue: Array<ScoreScaleValue$Outbound>;
};

/** @internal */
export const ScoreScale$outboundSchema: z.ZodType<
  ScoreScale$Outbound,
  z.ZodTypeDef,
  ScoreScale
> = z.object({
  sourcedId: z.string().optional(),
  status: ScoreScaleStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  type: z.string(),
  class: z.lazy(() => ScoreScaleClass$outboundSchema),
  course: z.nullable(z.lazy(() => ScoreScaleCourse$outboundSchema)).optional(),
  scoreScaleValue: z.array(z.lazy(() => ScoreScaleValue$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoreScale$ {
  /** @deprecated use `ScoreScale$inboundSchema` instead. */
  export const inboundSchema = ScoreScale$inboundSchema;
  /** @deprecated use `ScoreScale$outboundSchema` instead. */
  export const outboundSchema = ScoreScale$outboundSchema;
  /** @deprecated use `ScoreScale$Outbound` instead. */
  export type Outbound = ScoreScale$Outbound;
}

export function scoreScaleToJSON(scoreScale: ScoreScale): string {
  return JSON.stringify(ScoreScale$outboundSchema.parse(scoreScale));
}

export function scoreScaleFromJSON(
  jsonString: string,
): SafeParseResult<ScoreScale, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScoreScale$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScoreScale' from JSON`,
  );
}

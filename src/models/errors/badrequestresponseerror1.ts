/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type BadRequestResponseImsxCodeMinorField1 = {
  imsxCodeMinorFieldName?: "TargetEndSystem" | undefined;
  imsxCodeMinorFieldValue?: "invaliddata" | undefined;
};

export type BadRequestResponseImsxCodeMinor = {
  imsxCodeMinorField: Array<BadRequestResponseImsxCodeMinorField1>;
};

export type BadRequestResponseError1Data = {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: BadRequestResponseImsxCodeMinor;
};

export class BadRequestResponseError1 extends Error {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: BadRequestResponseImsxCodeMinor;

  /** The original data that was passed to this error instance. */
  data$: BadRequestResponseError1Data;

  constructor(err: BadRequestResponseError1Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.imsxCodeMajor = err.imsxCodeMajor;
    this.imsxSeverity = err.imsxSeverity;
    this.imsxDescription = err.imsxDescription;
    this.imsxCodeMinor = err.imsxCodeMinor;

    this.name = "BadRequestResponseError1";
  }
}

export type BadRequestResponseError2Data = {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: BadRequestResponseImsxCodeMinor;
};

export class BadRequestResponseError2 extends Error {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: BadRequestResponseImsxCodeMinor;

  /** The original data that was passed to this error instance. */
  data$: BadRequestResponseError2Data;

  constructor(err: BadRequestResponseError2Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.imsxCodeMajor = err.imsxCodeMajor;
    this.imsxSeverity = err.imsxSeverity;
    this.imsxDescription = err.imsxDescription;
    this.imsxCodeMinor = err.imsxCodeMinor;

    this.name = "BadRequestResponseError2";
  }
}

/** @internal */
export const BadRequestResponseImsxCodeMinorField1$inboundSchema: z.ZodType<
  BadRequestResponseImsxCodeMinorField1,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMinorFieldName: z.literal("TargetEndSystem").optional(),
  imsx_codeMinorFieldValue: z.literal("invaliddata").optional(),
}).transform((v) => {
  return remap$(v, {
    "imsx_codeMinorFieldName": "imsxCodeMinorFieldName",
    "imsx_codeMinorFieldValue": "imsxCodeMinorFieldValue",
  });
});

/** @internal */
export type BadRequestResponseImsxCodeMinorField1$Outbound = {
  imsx_codeMinorFieldName: "TargetEndSystem";
  imsx_codeMinorFieldValue: "invaliddata";
};

/** @internal */
export const BadRequestResponseImsxCodeMinorField1$outboundSchema: z.ZodType<
  BadRequestResponseImsxCodeMinorField1$Outbound,
  z.ZodTypeDef,
  BadRequestResponseImsxCodeMinorField1
> = z.object({
  imsxCodeMinorFieldName: z.literal("TargetEndSystem").default(
    "TargetEndSystem" as const,
  ),
  imsxCodeMinorFieldValue: z.literal("invaliddata").default(
    "invaliddata" as const,
  ),
}).transform((v) => {
  return remap$(v, {
    imsxCodeMinorFieldName: "imsx_codeMinorFieldName",
    imsxCodeMinorFieldValue: "imsx_codeMinorFieldValue",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestResponseImsxCodeMinorField1$ {
  /** @deprecated use `BadRequestResponseImsxCodeMinorField1$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestResponseImsxCodeMinorField1$inboundSchema;
  /** @deprecated use `BadRequestResponseImsxCodeMinorField1$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestResponseImsxCodeMinorField1$outboundSchema;
  /** @deprecated use `BadRequestResponseImsxCodeMinorField1$Outbound` instead. */
  export type Outbound = BadRequestResponseImsxCodeMinorField1$Outbound;
}

export function badRequestResponseImsxCodeMinorField1ToJSON(
  badRequestResponseImsxCodeMinorField1: BadRequestResponseImsxCodeMinorField1,
): string {
  return JSON.stringify(
    BadRequestResponseImsxCodeMinorField1$outboundSchema.parse(
      badRequestResponseImsxCodeMinorField1,
    ),
  );
}

export function badRequestResponseImsxCodeMinorField1FromJSON(
  jsonString: string,
): SafeParseResult<BadRequestResponseImsxCodeMinorField1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BadRequestResponseImsxCodeMinorField1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadRequestResponseImsxCodeMinorField1' from JSON`,
  );
}

/** @internal */
export const BadRequestResponseImsxCodeMinor$inboundSchema: z.ZodType<
  BadRequestResponseImsxCodeMinor,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMinorField: z.array(
    z.lazy(() => BadRequestResponseImsxCodeMinorField1$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "imsx_codeMinorField": "imsxCodeMinorField",
  });
});

/** @internal */
export type BadRequestResponseImsxCodeMinor$Outbound = {
  imsx_codeMinorField: Array<BadRequestResponseImsxCodeMinorField1$Outbound>;
};

/** @internal */
export const BadRequestResponseImsxCodeMinor$outboundSchema: z.ZodType<
  BadRequestResponseImsxCodeMinor$Outbound,
  z.ZodTypeDef,
  BadRequestResponseImsxCodeMinor
> = z.object({
  imsxCodeMinorField: z.array(
    z.lazy(() => BadRequestResponseImsxCodeMinorField1$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    imsxCodeMinorField: "imsx_codeMinorField",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestResponseImsxCodeMinor$ {
  /** @deprecated use `BadRequestResponseImsxCodeMinor$inboundSchema` instead. */
  export const inboundSchema = BadRequestResponseImsxCodeMinor$inboundSchema;
  /** @deprecated use `BadRequestResponseImsxCodeMinor$outboundSchema` instead. */
  export const outboundSchema = BadRequestResponseImsxCodeMinor$outboundSchema;
  /** @deprecated use `BadRequestResponseImsxCodeMinor$Outbound` instead. */
  export type Outbound = BadRequestResponseImsxCodeMinor$Outbound;
}

export function badRequestResponseImsxCodeMinorToJSON(
  badRequestResponseImsxCodeMinor: BadRequestResponseImsxCodeMinor,
): string {
  return JSON.stringify(
    BadRequestResponseImsxCodeMinor$outboundSchema.parse(
      badRequestResponseImsxCodeMinor,
    ),
  );
}

export function badRequestResponseImsxCodeMinorFromJSON(
  jsonString: string,
): SafeParseResult<BadRequestResponseImsxCodeMinor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadRequestResponseImsxCodeMinor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadRequestResponseImsxCodeMinor' from JSON`,
  );
}

/** @internal */
export const BadRequestResponseError1$inboundSchema: z.ZodType<
  BadRequestResponseError1,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMajor: z.literal("failure"),
  imsx_severity: z.literal("error"),
  imsx_description: z.string(),
  imsx_CodeMinor: z.lazy(() => BadRequestResponseImsxCodeMinor$inboundSchema),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "imsx_codeMajor": "imsxCodeMajor",
      "imsx_severity": "imsxSeverity",
      "imsx_description": "imsxDescription",
      "imsx_CodeMinor": "imsxCodeMinor",
    });

    return new BadRequestResponseError1(remapped);
  });

/** @internal */
export type BadRequestResponseError1$Outbound = {
  imsx_codeMajor: "failure";
  imsx_severity: "error";
  imsx_description: string;
  imsx_CodeMinor: BadRequestResponseImsxCodeMinor$Outbound;
};

/** @internal */
export const BadRequestResponseError1$outboundSchema: z.ZodType<
  BadRequestResponseError1$Outbound,
  z.ZodTypeDef,
  BadRequestResponseError1
> = z.instanceof(BadRequestResponseError1)
  .transform(v => v.data$)
  .pipe(
    z.object({
      imsxCodeMajor: z.literal("failure").default("failure" as const),
      imsxSeverity: z.literal("error").default("error" as const),
      imsxDescription: z.string(),
      imsxCodeMinor: z.lazy(() =>
        BadRequestResponseImsxCodeMinor$outboundSchema
      ),
    }).transform((v) => {
      return remap$(v, {
        imsxCodeMajor: "imsx_codeMajor",
        imsxSeverity: "imsx_severity",
        imsxDescription: "imsx_description",
        imsxCodeMinor: "imsx_CodeMinor",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestResponseError1$ {
  /** @deprecated use `BadRequestResponseError1$inboundSchema` instead. */
  export const inboundSchema = BadRequestResponseError1$inboundSchema;
  /** @deprecated use `BadRequestResponseError1$outboundSchema` instead. */
  export const outboundSchema = BadRequestResponseError1$outboundSchema;
  /** @deprecated use `BadRequestResponseError1$Outbound` instead. */
  export type Outbound = BadRequestResponseError1$Outbound;
}

/** @internal */
export const BadRequestResponseError2$inboundSchema: z.ZodType<
  BadRequestResponseError2,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMajor: z.literal("failure"),
  imsx_severity: z.literal("error"),
  imsx_description: z.string(),
  imsx_CodeMinor: z.lazy(() => BadRequestResponseImsxCodeMinor$inboundSchema),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "imsx_codeMajor": "imsxCodeMajor",
      "imsx_severity": "imsxSeverity",
      "imsx_description": "imsxDescription",
      "imsx_CodeMinor": "imsxCodeMinor",
    });

    return new BadRequestResponseError2(remapped);
  });

/** @internal */
export type BadRequestResponseError2$Outbound = {
  imsx_codeMajor: "failure";
  imsx_severity: "error";
  imsx_description: string;
  imsx_CodeMinor: BadRequestResponseImsxCodeMinor$Outbound;
};

/** @internal */
export const BadRequestResponseError2$outboundSchema: z.ZodType<
  BadRequestResponseError2$Outbound,
  z.ZodTypeDef,
  BadRequestResponseError2
> = z.instanceof(BadRequestResponseError2)
  .transform(v => v.data$)
  .pipe(
    z.object({
      imsxCodeMajor: z.literal("failure").default("failure" as const),
      imsxSeverity: z.literal("error").default("error" as const),
      imsxDescription: z.string(),
      imsxCodeMinor: z.lazy(() =>
        BadRequestResponseImsxCodeMinor$outboundSchema
      ),
    }).transform((v) => {
      return remap$(v, {
        imsxCodeMajor: "imsx_codeMajor",
        imsxSeverity: "imsx_severity",
        imsxDescription: "imsx_description",
        imsxCodeMinor: "imsx_CodeMinor",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestResponseError2$ {
  /** @deprecated use `BadRequestResponseError2$inboundSchema` instead. */
  export const inboundSchema = BadRequestResponseError2$inboundSchema;
  /** @deprecated use `BadRequestResponseError2$outboundSchema` instead. */
  export const outboundSchema = BadRequestResponseError2$outboundSchema;
  /** @deprecated use `BadRequestResponseError2$Outbound` instead. */
  export type Outbound = BadRequestResponseError2$Outbound;
}

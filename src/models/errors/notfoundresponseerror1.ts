/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type NotFoundResponseImsxCodeMinorField1 = {
  imsxCodeMinorFieldName?: "TargetEndSystem" | undefined;
  imsxCodeMinorFieldValue?: "unknownobject" | undefined;
};

export type NotFoundResponseImsxCodeMinor = {
  imsxCodeMinorField: Array<NotFoundResponseImsxCodeMinorField1>;
};

export type NotFoundResponseError1Data = {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: NotFoundResponseImsxCodeMinor;
};

export class NotFoundResponseError1 extends Error {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: NotFoundResponseImsxCodeMinor;

  /** The original data that was passed to this error instance. */
  data$: NotFoundResponseError1Data;

  constructor(err: NotFoundResponseError1Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.imsxCodeMajor = err.imsxCodeMajor;
    this.imsxSeverity = err.imsxSeverity;
    this.imsxDescription = err.imsxDescription;
    this.imsxCodeMinor = err.imsxCodeMinor;

    this.name = "NotFoundResponseError1";
  }
}

export type NotFoundResponseError2Data = {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: NotFoundResponseImsxCodeMinor;
};

export class NotFoundResponseError2 extends Error {
  imsxCodeMajor: "failure";
  imsxSeverity: "error";
  imsxDescription: string;
  imsxCodeMinor: NotFoundResponseImsxCodeMinor;

  /** The original data that was passed to this error instance. */
  data$: NotFoundResponseError2Data;

  constructor(err: NotFoundResponseError2Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.imsxCodeMajor = err.imsxCodeMajor;
    this.imsxSeverity = err.imsxSeverity;
    this.imsxDescription = err.imsxDescription;
    this.imsxCodeMinor = err.imsxCodeMinor;

    this.name = "NotFoundResponseError2";
  }
}

/** @internal */
export const NotFoundResponseImsxCodeMinorField1$inboundSchema: z.ZodType<
  NotFoundResponseImsxCodeMinorField1,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMinorFieldName: z.literal("TargetEndSystem").optional(),
  imsx_codeMinorFieldValue: z.literal("unknownobject").optional(),
}).transform((v) => {
  return remap$(v, {
    "imsx_codeMinorFieldName": "imsxCodeMinorFieldName",
    "imsx_codeMinorFieldValue": "imsxCodeMinorFieldValue",
  });
});

/** @internal */
export type NotFoundResponseImsxCodeMinorField1$Outbound = {
  imsx_codeMinorFieldName: "TargetEndSystem";
  imsx_codeMinorFieldValue: "unknownobject";
};

/** @internal */
export const NotFoundResponseImsxCodeMinorField1$outboundSchema: z.ZodType<
  NotFoundResponseImsxCodeMinorField1$Outbound,
  z.ZodTypeDef,
  NotFoundResponseImsxCodeMinorField1
> = z.object({
  imsxCodeMinorFieldName: z.literal("TargetEndSystem").default(
    "TargetEndSystem" as const,
  ),
  imsxCodeMinorFieldValue: z.literal("unknownobject").default(
    "unknownobject" as const,
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
export namespace NotFoundResponseImsxCodeMinorField1$ {
  /** @deprecated use `NotFoundResponseImsxCodeMinorField1$inboundSchema` instead. */
  export const inboundSchema =
    NotFoundResponseImsxCodeMinorField1$inboundSchema;
  /** @deprecated use `NotFoundResponseImsxCodeMinorField1$outboundSchema` instead. */
  export const outboundSchema =
    NotFoundResponseImsxCodeMinorField1$outboundSchema;
  /** @deprecated use `NotFoundResponseImsxCodeMinorField1$Outbound` instead. */
  export type Outbound = NotFoundResponseImsxCodeMinorField1$Outbound;
}

export function notFoundResponseImsxCodeMinorField1ToJSON(
  notFoundResponseImsxCodeMinorField1: NotFoundResponseImsxCodeMinorField1,
): string {
  return JSON.stringify(
    NotFoundResponseImsxCodeMinorField1$outboundSchema.parse(
      notFoundResponseImsxCodeMinorField1,
    ),
  );
}

export function notFoundResponseImsxCodeMinorField1FromJSON(
  jsonString: string,
): SafeParseResult<NotFoundResponseImsxCodeMinorField1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      NotFoundResponseImsxCodeMinorField1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundResponseImsxCodeMinorField1' from JSON`,
  );
}

/** @internal */
export const NotFoundResponseImsxCodeMinor$inboundSchema: z.ZodType<
  NotFoundResponseImsxCodeMinor,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMinorField: z.array(
    z.lazy(() => NotFoundResponseImsxCodeMinorField1$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "imsx_codeMinorField": "imsxCodeMinorField",
  });
});

/** @internal */
export type NotFoundResponseImsxCodeMinor$Outbound = {
  imsx_codeMinorField: Array<NotFoundResponseImsxCodeMinorField1$Outbound>;
};

/** @internal */
export const NotFoundResponseImsxCodeMinor$outboundSchema: z.ZodType<
  NotFoundResponseImsxCodeMinor$Outbound,
  z.ZodTypeDef,
  NotFoundResponseImsxCodeMinor
> = z.object({
  imsxCodeMinorField: z.array(
    z.lazy(() => NotFoundResponseImsxCodeMinorField1$outboundSchema),
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
export namespace NotFoundResponseImsxCodeMinor$ {
  /** @deprecated use `NotFoundResponseImsxCodeMinor$inboundSchema` instead. */
  export const inboundSchema = NotFoundResponseImsxCodeMinor$inboundSchema;
  /** @deprecated use `NotFoundResponseImsxCodeMinor$outboundSchema` instead. */
  export const outboundSchema = NotFoundResponseImsxCodeMinor$outboundSchema;
  /** @deprecated use `NotFoundResponseImsxCodeMinor$Outbound` instead. */
  export type Outbound = NotFoundResponseImsxCodeMinor$Outbound;
}

export function notFoundResponseImsxCodeMinorToJSON(
  notFoundResponseImsxCodeMinor: NotFoundResponseImsxCodeMinor,
): string {
  return JSON.stringify(
    NotFoundResponseImsxCodeMinor$outboundSchema.parse(
      notFoundResponseImsxCodeMinor,
    ),
  );
}

export function notFoundResponseImsxCodeMinorFromJSON(
  jsonString: string,
): SafeParseResult<NotFoundResponseImsxCodeMinor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotFoundResponseImsxCodeMinor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundResponseImsxCodeMinor' from JSON`,
  );
}

/** @internal */
export const NotFoundResponseError1$inboundSchema: z.ZodType<
  NotFoundResponseError1,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMajor: z.literal("failure"),
  imsx_severity: z.literal("error"),
  imsx_description: z.string(),
  imsx_CodeMinor: z.lazy(() => NotFoundResponseImsxCodeMinor$inboundSchema),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "imsx_codeMajor": "imsxCodeMajor",
      "imsx_severity": "imsxSeverity",
      "imsx_description": "imsxDescription",
      "imsx_CodeMinor": "imsxCodeMinor",
    });

    return new NotFoundResponseError1(remapped);
  });

/** @internal */
export type NotFoundResponseError1$Outbound = {
  imsx_codeMajor: "failure";
  imsx_severity: "error";
  imsx_description: string;
  imsx_CodeMinor: NotFoundResponseImsxCodeMinor$Outbound;
};

/** @internal */
export const NotFoundResponseError1$outboundSchema: z.ZodType<
  NotFoundResponseError1$Outbound,
  z.ZodTypeDef,
  NotFoundResponseError1
> = z.instanceof(NotFoundResponseError1)
  .transform(v => v.data$)
  .pipe(
    z.object({
      imsxCodeMajor: z.literal("failure").default("failure" as const),
      imsxSeverity: z.literal("error").default("error" as const),
      imsxDescription: z.string(),
      imsxCodeMinor: z.lazy(() => NotFoundResponseImsxCodeMinor$outboundSchema),
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
export namespace NotFoundResponseError1$ {
  /** @deprecated use `NotFoundResponseError1$inboundSchema` instead. */
  export const inboundSchema = NotFoundResponseError1$inboundSchema;
  /** @deprecated use `NotFoundResponseError1$outboundSchema` instead. */
  export const outboundSchema = NotFoundResponseError1$outboundSchema;
  /** @deprecated use `NotFoundResponseError1$Outbound` instead. */
  export type Outbound = NotFoundResponseError1$Outbound;
}

/** @internal */
export const NotFoundResponseError2$inboundSchema: z.ZodType<
  NotFoundResponseError2,
  z.ZodTypeDef,
  unknown
> = z.object({
  imsx_codeMajor: z.literal("failure"),
  imsx_severity: z.literal("error"),
  imsx_description: z.string(),
  imsx_CodeMinor: z.lazy(() => NotFoundResponseImsxCodeMinor$inboundSchema),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "imsx_codeMajor": "imsxCodeMajor",
      "imsx_severity": "imsxSeverity",
      "imsx_description": "imsxDescription",
      "imsx_CodeMinor": "imsxCodeMinor",
    });

    return new NotFoundResponseError2(remapped);
  });

/** @internal */
export type NotFoundResponseError2$Outbound = {
  imsx_codeMajor: "failure";
  imsx_severity: "error";
  imsx_description: string;
  imsx_CodeMinor: NotFoundResponseImsxCodeMinor$Outbound;
};

/** @internal */
export const NotFoundResponseError2$outboundSchema: z.ZodType<
  NotFoundResponseError2$Outbound,
  z.ZodTypeDef,
  NotFoundResponseError2
> = z.instanceof(NotFoundResponseError2)
  .transform(v => v.data$)
  .pipe(
    z.object({
      imsxCodeMajor: z.literal("failure").default("failure" as const),
      imsxSeverity: z.literal("error").default("error" as const),
      imsxDescription: z.string(),
      imsxCodeMinor: z.lazy(() => NotFoundResponseImsxCodeMinor$outboundSchema),
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
export namespace NotFoundResponseError2$ {
  /** @deprecated use `NotFoundResponseError2$inboundSchema` instead. */
  export const inboundSchema = NotFoundResponseError2$inboundSchema;
  /** @deprecated use `NotFoundResponseError2$outboundSchema` instead. */
  export const outboundSchema = NotFoundResponseError2$outboundSchema;
  /** @deprecated use `NotFoundResponseError2$Outbound` instead. */
  export type Outbound = NotFoundResponseError2$Outbound;
}

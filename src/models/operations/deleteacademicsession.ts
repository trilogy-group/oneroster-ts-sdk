/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteAcademicSessionRequest = {
  /**
   * The sourcedId of the academic session to delete
   */
  sourcedId: string;
};

/** @internal */
export const DeleteAcademicSessionRequest$inboundSchema: z.ZodType<
  DeleteAcademicSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type DeleteAcademicSessionRequest$Outbound = {
  sourcedId: string;
};

/** @internal */
export const DeleteAcademicSessionRequest$outboundSchema: z.ZodType<
  DeleteAcademicSessionRequest$Outbound,
  z.ZodTypeDef,
  DeleteAcademicSessionRequest
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAcademicSessionRequest$ {
  /** @deprecated use `DeleteAcademicSessionRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAcademicSessionRequest$inboundSchema;
  /** @deprecated use `DeleteAcademicSessionRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAcademicSessionRequest$outboundSchema;
  /** @deprecated use `DeleteAcademicSessionRequest$Outbound` instead. */
  export type Outbound = DeleteAcademicSessionRequest$Outbound;
}

export function deleteAcademicSessionRequestToJSON(
  deleteAcademicSessionRequest: DeleteAcademicSessionRequest,
): string {
  return JSON.stringify(
    DeleteAcademicSessionRequest$outboundSchema.parse(
      deleteAcademicSessionRequest,
    ),
  );
}

export function deleteAcademicSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAcademicSessionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteAcademicSessionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAcademicSessionRequest' from JSON`,
  );
}

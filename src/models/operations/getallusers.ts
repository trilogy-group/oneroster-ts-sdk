/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The order to sort the response by
 */
export const GetAllUsersOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetAllUsersOrderBy = ClosedEnum<typeof GetAllUsersOrderBy>;

export type GetAllUsersRequest = {
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
  orderBy?: GetAllUsersOrderBy | undefined;
  /**
   * The filter to apply to the response
   */
  filter?: string | undefined;
  /**
   * The search query to apply to the response
   */
  search?: string | undefined;
};

export const GetAllUsersStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type GetAllUsersStatus = ClosedEnum<typeof GetAllUsersStatus>;

export type GetAllUsersUserId = {
  type: string;
  identifier: string;
};

export const GetAllUsersRoleType = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type GetAllUsersRoleType = ClosedEnum<typeof GetAllUsersRoleType>;

export const GetAllUsersRoleEnum = {
  Administrator: "administrator",
  Aide: "aide",
  Guardian: "guardian",
  Parent: "parent",
  Proctor: "proctor",
  Relative: "relative",
  Student: "student",
  Teacher: "teacher",
} as const;
export type GetAllUsersRoleEnum = ClosedEnum<typeof GetAllUsersRoleEnum>;

export type GetAllUsersOrg = {
  href: string;
  sourcedId: string;
  type: string;
};

export type GetAllUsersRole = {
  roleType: GetAllUsersRoleType;
  role: GetAllUsersRoleEnum;
  org: GetAllUsersOrg;
  userProfile?: string | undefined;
  beginDate: string | null;
  endDate: string | null;
};

export const GetAllUsersType = {
  AcademicSession: "academicSession",
  AssessmentLineItem: "assessmentLineItem",
  Category: "category",
  Class: "class",
  Course: "course",
  Demographics: "demographics",
  Enrollment: "enrollment",
  GradingPeriod: "gradingPeriod",
  LineItem: "lineItem",
  Org: "org",
  Resource: "resource",
  Result: "result",
  ScoreScale: "scoreScale",
  Student: "student",
  Teacher: "teacher",
  Term: "term",
  User: "user",
  ComponentResource: "componentResource",
  CourseComponent: "courseComponent",
} as const;
export type GetAllUsersType = ClosedEnum<typeof GetAllUsersType>;

export type GetAllUsersAgent = {
  href: string;
  sourcedId: string;
  type: GetAllUsersType;
};

export type GetAllUsersPrimaryOrg = {
  href: string;
  sourcedId: string;
  type: string;
};

export type GetAllUsersUser = {
  sourcedId: string;
  status: GetAllUsersStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  userMasterIdentifier?: string | null | undefined;
  username?: string | null | undefined;
  userIds?: Array<GetAllUsersUserId> | undefined;
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null | undefined;
  roles: Array<GetAllUsersRole>;
  agents: Array<GetAllUsersAgent>;
  primaryOrg?: GetAllUsersPrimaryOrg | undefined;
  email?: string | null | undefined;
  preferredFirstName?: string | null | undefined;
  preferredMiddleName?: string | null | undefined;
  preferredLastName?: string | null | undefined;
  pronouns?: string | null | undefined;
  grades?: Array<string> | undefined;
  password?: string | null | undefined;
  sms?: string | null | undefined;
  phone?: string | null | undefined;
};

/**
 * Successful response containing a collection of users
 */
export type GetAllUsersResponseBody = {
  users: Array<GetAllUsersUser>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetAllUsersResponse = {
  result: GetAllUsersResponseBody;
};

/** @internal */
export const GetAllUsersOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersOrderBy
> = z.nativeEnum(GetAllUsersOrderBy);

/** @internal */
export const GetAllUsersOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersOrderBy
> = GetAllUsersOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersOrderBy$ {
  /** @deprecated use `GetAllUsersOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersOrderBy$inboundSchema;
  /** @deprecated use `GetAllUsersOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersOrderBy$outboundSchema;
}

/** @internal */
export const GetAllUsersRequest$inboundSchema: z.ZodType<
  GetAllUsersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllUsersOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetAllUsersRequest$Outbound = {
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetAllUsersRequest$outboundSchema: z.ZodType<
  GetAllUsersRequest$Outbound,
  z.ZodTypeDef,
  GetAllUsersRequest
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllUsersOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersRequest$ {
  /** @deprecated use `GetAllUsersRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersRequest$inboundSchema;
  /** @deprecated use `GetAllUsersRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersRequest$outboundSchema;
  /** @deprecated use `GetAllUsersRequest$Outbound` instead. */
  export type Outbound = GetAllUsersRequest$Outbound;
}

export function getAllUsersRequestToJSON(
  getAllUsersRequest: GetAllUsersRequest,
): string {
  return JSON.stringify(
    GetAllUsersRequest$outboundSchema.parse(getAllUsersRequest),
  );
}

export function getAllUsersRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersRequest' from JSON`,
  );
}

/** @internal */
export const GetAllUsersStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersStatus
> = z.nativeEnum(GetAllUsersStatus);

/** @internal */
export const GetAllUsersStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersStatus
> = GetAllUsersStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersStatus$ {
  /** @deprecated use `GetAllUsersStatus$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersStatus$inboundSchema;
  /** @deprecated use `GetAllUsersStatus$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersStatus$outboundSchema;
}

/** @internal */
export const GetAllUsersUserId$inboundSchema: z.ZodType<
  GetAllUsersUserId,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  identifier: z.string(),
});

/** @internal */
export type GetAllUsersUserId$Outbound = {
  type: string;
  identifier: string;
};

/** @internal */
export const GetAllUsersUserId$outboundSchema: z.ZodType<
  GetAllUsersUserId$Outbound,
  z.ZodTypeDef,
  GetAllUsersUserId
> = z.object({
  type: z.string(),
  identifier: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersUserId$ {
  /** @deprecated use `GetAllUsersUserId$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersUserId$inboundSchema;
  /** @deprecated use `GetAllUsersUserId$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersUserId$outboundSchema;
  /** @deprecated use `GetAllUsersUserId$Outbound` instead. */
  export type Outbound = GetAllUsersUserId$Outbound;
}

export function getAllUsersUserIdToJSON(
  getAllUsersUserId: GetAllUsersUserId,
): string {
  return JSON.stringify(
    GetAllUsersUserId$outboundSchema.parse(getAllUsersUserId),
  );
}

export function getAllUsersUserIdFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersUserId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersUserId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersUserId' from JSON`,
  );
}

/** @internal */
export const GetAllUsersRoleType$inboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersRoleType
> = z.nativeEnum(GetAllUsersRoleType);

/** @internal */
export const GetAllUsersRoleType$outboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersRoleType
> = GetAllUsersRoleType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersRoleType$ {
  /** @deprecated use `GetAllUsersRoleType$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersRoleType$inboundSchema;
  /** @deprecated use `GetAllUsersRoleType$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersRoleType$outboundSchema;
}

/** @internal */
export const GetAllUsersRoleEnum$inboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersRoleEnum
> = z.nativeEnum(GetAllUsersRoleEnum);

/** @internal */
export const GetAllUsersRoleEnum$outboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersRoleEnum
> = GetAllUsersRoleEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersRoleEnum$ {
  /** @deprecated use `GetAllUsersRoleEnum$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersRoleEnum$inboundSchema;
  /** @deprecated use `GetAllUsersRoleEnum$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersRoleEnum$outboundSchema;
}

/** @internal */
export const GetAllUsersOrg$inboundSchema: z.ZodType<
  GetAllUsersOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/** @internal */
export type GetAllUsersOrg$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetAllUsersOrg$outboundSchema: z.ZodType<
  GetAllUsersOrg$Outbound,
  z.ZodTypeDef,
  GetAllUsersOrg
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersOrg$ {
  /** @deprecated use `GetAllUsersOrg$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersOrg$inboundSchema;
  /** @deprecated use `GetAllUsersOrg$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersOrg$outboundSchema;
  /** @deprecated use `GetAllUsersOrg$Outbound` instead. */
  export type Outbound = GetAllUsersOrg$Outbound;
}

export function getAllUsersOrgToJSON(getAllUsersOrg: GetAllUsersOrg): string {
  return JSON.stringify(GetAllUsersOrg$outboundSchema.parse(getAllUsersOrg));
}

export function getAllUsersOrgFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersOrg' from JSON`,
  );
}

/** @internal */
export const GetAllUsersRole$inboundSchema: z.ZodType<
  GetAllUsersRole,
  z.ZodTypeDef,
  unknown
> = z.object({
  roleType: GetAllUsersRoleType$inboundSchema,
  role: GetAllUsersRoleEnum$inboundSchema,
  org: z.lazy(() => GetAllUsersOrg$inboundSchema),
  userProfile: z.string().optional(),
  beginDate: z.nullable(z.string()),
  endDate: z.nullable(z.string()),
});

/** @internal */
export type GetAllUsersRole$Outbound = {
  roleType: string;
  role: string;
  org: GetAllUsersOrg$Outbound;
  userProfile?: string | undefined;
  beginDate: string | null;
  endDate: string | null;
};

/** @internal */
export const GetAllUsersRole$outboundSchema: z.ZodType<
  GetAllUsersRole$Outbound,
  z.ZodTypeDef,
  GetAllUsersRole
> = z.object({
  roleType: GetAllUsersRoleType$outboundSchema,
  role: GetAllUsersRoleEnum$outboundSchema,
  org: z.lazy(() => GetAllUsersOrg$outboundSchema),
  userProfile: z.string().optional(),
  beginDate: z.nullable(z.string()),
  endDate: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersRole$ {
  /** @deprecated use `GetAllUsersRole$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersRole$inboundSchema;
  /** @deprecated use `GetAllUsersRole$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersRole$outboundSchema;
  /** @deprecated use `GetAllUsersRole$Outbound` instead. */
  export type Outbound = GetAllUsersRole$Outbound;
}

export function getAllUsersRoleToJSON(
  getAllUsersRole: GetAllUsersRole,
): string {
  return JSON.stringify(GetAllUsersRole$outboundSchema.parse(getAllUsersRole));
}

export function getAllUsersRoleFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersRole, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersRole$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersRole' from JSON`,
  );
}

/** @internal */
export const GetAllUsersType$inboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersType
> = z.nativeEnum(GetAllUsersType);

/** @internal */
export const GetAllUsersType$outboundSchema: z.ZodNativeEnum<
  typeof GetAllUsersType
> = GetAllUsersType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersType$ {
  /** @deprecated use `GetAllUsersType$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersType$inboundSchema;
  /** @deprecated use `GetAllUsersType$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersType$outboundSchema;
}

/** @internal */
export const GetAllUsersAgent$inboundSchema: z.ZodType<
  GetAllUsersAgent,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: GetAllUsersType$inboundSchema,
});

/** @internal */
export type GetAllUsersAgent$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetAllUsersAgent$outboundSchema: z.ZodType<
  GetAllUsersAgent$Outbound,
  z.ZodTypeDef,
  GetAllUsersAgent
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: GetAllUsersType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersAgent$ {
  /** @deprecated use `GetAllUsersAgent$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersAgent$inboundSchema;
  /** @deprecated use `GetAllUsersAgent$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersAgent$outboundSchema;
  /** @deprecated use `GetAllUsersAgent$Outbound` instead. */
  export type Outbound = GetAllUsersAgent$Outbound;
}

export function getAllUsersAgentToJSON(
  getAllUsersAgent: GetAllUsersAgent,
): string {
  return JSON.stringify(
    GetAllUsersAgent$outboundSchema.parse(getAllUsersAgent),
  );
}

export function getAllUsersAgentFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersAgent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersAgent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersAgent' from JSON`,
  );
}

/** @internal */
export const GetAllUsersPrimaryOrg$inboundSchema: z.ZodType<
  GetAllUsersPrimaryOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/** @internal */
export type GetAllUsersPrimaryOrg$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetAllUsersPrimaryOrg$outboundSchema: z.ZodType<
  GetAllUsersPrimaryOrg$Outbound,
  z.ZodTypeDef,
  GetAllUsersPrimaryOrg
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersPrimaryOrg$ {
  /** @deprecated use `GetAllUsersPrimaryOrg$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersPrimaryOrg$inboundSchema;
  /** @deprecated use `GetAllUsersPrimaryOrg$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersPrimaryOrg$outboundSchema;
  /** @deprecated use `GetAllUsersPrimaryOrg$Outbound` instead. */
  export type Outbound = GetAllUsersPrimaryOrg$Outbound;
}

export function getAllUsersPrimaryOrgToJSON(
  getAllUsersPrimaryOrg: GetAllUsersPrimaryOrg,
): string {
  return JSON.stringify(
    GetAllUsersPrimaryOrg$outboundSchema.parse(getAllUsersPrimaryOrg),
  );
}

export function getAllUsersPrimaryOrgFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersPrimaryOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersPrimaryOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersPrimaryOrg' from JSON`,
  );
}

/** @internal */
export const GetAllUsersUser$inboundSchema: z.ZodType<
  GetAllUsersUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  status: GetAllUsersStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  userMasterIdentifier: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  userIds: z.array(z.lazy(() => GetAllUsersUserId$inboundSchema)).optional(),
  enabledUser: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  middleName: z.nullable(z.string()).optional(),
  roles: z.array(z.lazy(() => GetAllUsersRole$inboundSchema)),
  agents: z.array(z.lazy(() => GetAllUsersAgent$inboundSchema)),
  primaryOrg: z.lazy(() => GetAllUsersPrimaryOrg$inboundSchema).optional(),
  email: z.nullable(z.string()).optional(),
  preferredFirstName: z.nullable(z.string()).optional(),
  preferredMiddleName: z.nullable(z.string()).optional(),
  preferredLastName: z.nullable(z.string()).optional(),
  pronouns: z.nullable(z.string()).optional(),
  grades: z.array(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  sms: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
});

/** @internal */
export type GetAllUsersUser$Outbound = {
  sourcedId: string;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  userMasterIdentifier?: string | null | undefined;
  username?: string | null | undefined;
  userIds?: Array<GetAllUsersUserId$Outbound> | undefined;
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null | undefined;
  roles: Array<GetAllUsersRole$Outbound>;
  agents: Array<GetAllUsersAgent$Outbound>;
  primaryOrg?: GetAllUsersPrimaryOrg$Outbound | undefined;
  email?: string | null | undefined;
  preferredFirstName?: string | null | undefined;
  preferredMiddleName?: string | null | undefined;
  preferredLastName?: string | null | undefined;
  pronouns?: string | null | undefined;
  grades?: Array<string> | undefined;
  password?: string | null | undefined;
  sms?: string | null | undefined;
  phone?: string | null | undefined;
};

/** @internal */
export const GetAllUsersUser$outboundSchema: z.ZodType<
  GetAllUsersUser$Outbound,
  z.ZodTypeDef,
  GetAllUsersUser
> = z.object({
  sourcedId: z.string(),
  status: GetAllUsersStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  userMasterIdentifier: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  userIds: z.array(z.lazy(() => GetAllUsersUserId$outboundSchema)).optional(),
  enabledUser: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  middleName: z.nullable(z.string()).optional(),
  roles: z.array(z.lazy(() => GetAllUsersRole$outboundSchema)),
  agents: z.array(z.lazy(() => GetAllUsersAgent$outboundSchema)),
  primaryOrg: z.lazy(() => GetAllUsersPrimaryOrg$outboundSchema).optional(),
  email: z.nullable(z.string()).optional(),
  preferredFirstName: z.nullable(z.string()).optional(),
  preferredMiddleName: z.nullable(z.string()).optional(),
  preferredLastName: z.nullable(z.string()).optional(),
  pronouns: z.nullable(z.string()).optional(),
  grades: z.array(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  sms: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersUser$ {
  /** @deprecated use `GetAllUsersUser$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersUser$inboundSchema;
  /** @deprecated use `GetAllUsersUser$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersUser$outboundSchema;
  /** @deprecated use `GetAllUsersUser$Outbound` instead. */
  export type Outbound = GetAllUsersUser$Outbound;
}

export function getAllUsersUserToJSON(
  getAllUsersUser: GetAllUsersUser,
): string {
  return JSON.stringify(GetAllUsersUser$outboundSchema.parse(getAllUsersUser));
}

export function getAllUsersUserFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersUser' from JSON`,
  );
}

/** @internal */
export const GetAllUsersResponseBody$inboundSchema: z.ZodType<
  GetAllUsersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  users: z.array(z.lazy(() => GetAllUsersUser$inboundSchema)),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetAllUsersResponseBody$Outbound = {
  users: Array<GetAllUsersUser$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetAllUsersResponseBody$outboundSchema: z.ZodType<
  GetAllUsersResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllUsersResponseBody
> = z.object({
  users: z.array(z.lazy(() => GetAllUsersUser$outboundSchema)),
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
export namespace GetAllUsersResponseBody$ {
  /** @deprecated use `GetAllUsersResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersResponseBody$inboundSchema;
  /** @deprecated use `GetAllUsersResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersResponseBody$outboundSchema;
  /** @deprecated use `GetAllUsersResponseBody$Outbound` instead. */
  export type Outbound = GetAllUsersResponseBody$Outbound;
}

export function getAllUsersResponseBodyToJSON(
  getAllUsersResponseBody: GetAllUsersResponseBody,
): string {
  return JSON.stringify(
    GetAllUsersResponseBody$outboundSchema.parse(getAllUsersResponseBody),
  );
}

export function getAllUsersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAllUsersResponse$inboundSchema: z.ZodType<
  GetAllUsersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetAllUsersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAllUsersResponse$Outbound = {
  Result: GetAllUsersResponseBody$Outbound;
};

/** @internal */
export const GetAllUsersResponse$outboundSchema: z.ZodType<
  GetAllUsersResponse$Outbound,
  z.ZodTypeDef,
  GetAllUsersResponse
> = z.object({
  result: z.lazy(() => GetAllUsersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllUsersResponse$ {
  /** @deprecated use `GetAllUsersResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllUsersResponse$inboundSchema;
  /** @deprecated use `GetAllUsersResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllUsersResponse$outboundSchema;
  /** @deprecated use `GetAllUsersResponse$Outbound` instead. */
  export type Outbound = GetAllUsersResponse$Outbound;
}

export function getAllUsersResponseToJSON(
  getAllUsersResponse: GetAllUsersResponse,
): string {
  return JSON.stringify(
    GetAllUsersResponse$outboundSchema.parse(getAllUsersResponse),
  );
}

export function getAllUsersResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllUsersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllUsersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllUsersResponse' from JSON`,
  );
}

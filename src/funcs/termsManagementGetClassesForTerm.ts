/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { OneRosterCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Get Classes for a Term
 *
 * @remarks
 * To get the set of Classes related to a specific Term. If the specified term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'
 */
export function termsManagementGetClassesForTerm(
  client: OneRosterCore,
  request: operations.GetClassesForTermRequest,
  options?: RequestOptions,
): APIPromise<
  PageIterator<
    Result<
      operations.GetClassesForTermResponse,
      | errors.BadRequestResponseError1
      | errors.UnauthorizedRequestResponseError1
      | errors.ForbiddenResponseError1
      | errors.NotFoundResponseError1
      | errors.UnprocessableEntityResponseError2
      | errors.TooManyRequestsResponseError1
      | errors.InternalServerErrorResponse1
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    { offset: number }
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: OneRosterCore,
  request: operations.GetClassesForTermRequest,
  options?: RequestOptions,
): Promise<
  [
    PageIterator<
      Result<
        operations.GetClassesForTermResponse,
        | errors.BadRequestResponseError1
        | errors.UnauthorizedRequestResponseError1
        | errors.ForbiddenResponseError1
        | errors.NotFoundResponseError1
        | errors.UnprocessableEntityResponseError2
        | errors.TooManyRequestsResponseError1
        | errors.InternalServerErrorResponse1
        | APIError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >,
      { offset: number }
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetClassesForTermRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [haltIterator(parsed), { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    termSourcedId: encodeSimple("termSourcedId", payload.termSourcedId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/ims/oneroster/rostering/v1p2/terms/{termSourcedId}/classes",
  )(pathParams);

  const query = encodeFormQuery({
    "fields": payload.fields,
    "filter": payload.filter,
    "limit": payload.limit,
    "offset": payload.offset,
    "orderBy": payload.orderBy,
    "search": payload.search,
    "sort": payload.sort,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getClassesForTerm",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [haltIterator(requestRes), { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "422", "429", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [haltIterator(doResult), { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.GetClassesForTermResponse,
    | errors.BadRequestResponseError1
    | errors.UnauthorizedRequestResponseError1
    | errors.ForbiddenResponseError1
    | errors.NotFoundResponseError1
    | errors.UnprocessableEntityResponseError2
    | errors.TooManyRequestsResponseError1
    | errors.InternalServerErrorResponse1
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetClassesForTermResponse$inboundSchema, {
      key: "Result",
    }),
    M.jsonErr(400, errors.BadRequestResponseError1$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedRequestResponseError1$inboundSchema),
    M.jsonErr(403, errors.ForbiddenResponseError1$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponseError1$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponseError2$inboundSchema),
    M.jsonErr(429, errors.TooManyRequestsResponseError1$inboundSchema),
    M.jsonErr(500, errors.InternalServerErrorResponse1$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [haltIterator(result), {
      status: "complete",
      request: req,
      response,
    }];
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.GetClassesForTermResponse,
        | errors.BadRequestResponseError1
        | errors.UnauthorizedRequestResponseError1
        | errors.ForbiddenResponseError1
        | errors.NotFoundResponseError1
        | errors.UnprocessableEntityResponseError2
        | errors.TooManyRequestsResponseError1
        | errors.InternalServerErrorResponse1
        | APIError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >
    >;
    "~next"?: { offset: number };
  } => {
    const offset = request?.offset ?? 0;

    if (!responseData) {
      return { next: () => null };
    }
    const results = dlv(responseData, "classes");
    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = request?.limit ?? 100;
    if (results.length < limit) {
      return { next: () => null };
    }
    const nextOffset = offset + results.length;

    const nextVal = () =>
      termsManagementGetClassesForTerm(
        client,
        {
          ...request,
          offset: nextOffset,
        },
        options,
      );

    return { next: nextVal, "~next": { offset: nextOffset } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return [{ ...page, ...createPageIterator(page, (v) => !v.ok) }, {
    status: "complete",
    request: req,
    response,
  }];
}

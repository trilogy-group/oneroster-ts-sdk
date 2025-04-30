# SchoolsLineItems
(*schools.lineItems*)

## Overview

### Available Operations

* [create](#create) - Create line items for a school

## create

Creates new line items associated with the specified school.

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.schools.lineItems.create({
    sourcedId: "<id>",
    requestBody: {
      lineItems: [
        {
          status: "active",
          title: "<value>",
          assignDate: new Date("2023-04-27T10:18:47.158Z"),
          dueDate: new Date("2024-08-01T01:20:45.518Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
        {
          status: "tobedeleted",
          title: "<value>",
          assignDate: new Date("2025-10-22T11:43:49.772Z"),
          dueDate: new Date("2025-04-13T11:50:54.034Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
        {
          status: "tobedeleted",
          title: "<value>",
          assignDate: new Date("2024-03-10T22:36:23.472Z"),
          dueDate: new Date("2024-02-06T22:38:06.551Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OneRosterCore } from "@superbuilders/oneroster/core.js";
import { schoolsLineItemsCreate } from "@superbuilders/oneroster/funcs/schoolsLineItemsCreate.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await schoolsLineItemsCreate(oneRoster, {
    sourcedId: "<id>",
    requestBody: {
      lineItems: [
        {
          status: "active",
          title: "<value>",
          assignDate: new Date("2023-04-27T10:18:47.158Z"),
          dueDate: new Date("2024-08-01T01:20:45.518Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
        {
          status: "tobedeleted",
          title: "<value>",
          assignDate: new Date("2025-10-22T11:43:49.772Z"),
          dueDate: new Date("2025-04-13T11:50:54.034Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
        {
          status: "tobedeleted",
          title: "<value>",
          assignDate: new Date("2024-03-10T22:36:23.472Z"),
          dueDate: new Date("2024-02-06T22:38:06.551Z"),
          class: {
            sourcedId: "<id>",
          },
          school: {
            sourcedId: "<id>",
          },
          category: {
            sourcedId: "<id>",
          },
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLineItemsForSchoolRequest](../../models/operations/createlineitemsforschoolrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateLineItemsForSchoolResponse](../../models/operations/createlineitemsforschoolresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError1          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse2      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |
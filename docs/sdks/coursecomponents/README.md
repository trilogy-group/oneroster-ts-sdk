# CourseComponents
(*courseComponents*)

## Overview

### Available Operations

* [getAll](#getall) - Get all Course Components
* [delete](#delete) - Delete a Course Component

## getAll

To get all Course Components on the service provider.

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
  const result = await oneRoster.courseComponents.getAll({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OneRosterCore } from "@superbuilders/oneroster/core.js";
import { courseComponentsGetAll } from "@superbuilders/oneroster/funcs/courseComponentsGetAll.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await courseComponentsGetAll(oneRoster, {
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllCourseComponentsRequest](../../models/operations/getallcoursecomponentsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllCourseComponentsResponse](../../models/operations/getallcoursecomponentsresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError1          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## delete

Perform a soft delete on a specific Course Component on the service provider. The operation changes the status of the Course Component to 'tobedeleted'.

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
  const result = await oneRoster.courseComponents.delete({
    sourcedId: "<id>",
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
import { courseComponentsDelete } from "@superbuilders/oneroster/funcs/courseComponentsDelete.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await courseComponentsDelete(oneRoster, {
    sourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteCourseComponentRequest](../../models/operations/deletecoursecomponentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError2            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |
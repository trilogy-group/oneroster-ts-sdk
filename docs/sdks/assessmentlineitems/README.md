# AssessmentLineItems
(*assessmentLineItems*)

## Overview

### Available Operations

* [getAll](#getall) - The REST read request message for the getAllAssessmentLineItems() API call.
* [create](#create) - The REST create request message for the createAssessmentLineItem() API call.
* [get](#get) - The REST read request message for the getAssessmentLineItem() API call.
* [update](#update) - The REST update request message for the updateAssessmentLineItem() API call.
* [delete](#delete) - The REST delete request message for the deleteAssessmentLineItem() API call.

## getAll

Get all of the Assessment Line Items on the service provider.

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
  const result = await oneRoster.assessmentLineItems.getAll({
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
import { assessmentLineItemsGetAll } from "@superbuilders/oneroster/funcs/assessmentLineItemsGetAll.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await assessmentLineItemsGetAll(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetAllAssessmentLineItemsRequest](../../models/operations/getallassessmentlineitemsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllAssessmentLineItemsResponse](../../models/operations/getallassessmentlineitemsresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError2            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## create

To create an Assessment Line Item. The responding system must return the set of sourcedIds that have been allocated to the newly created assessmentLineItem record. A 'title' MUST be provided when creating an assessmentLineItem.

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
  const result = await oneRoster.assessmentLineItems.create({
    assessmentLineItem: {
      status: "tobedeleted",
      title: "<value>",
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
import { assessmentLineItemsCreate } from "@superbuilders/oneroster/funcs/assessmentLineItemsCreate.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await assessmentLineItemsCreate(oneRoster, {
    assessmentLineItem: {
      status: "tobedeleted",
      title: "<value>",
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
| `request`                                                                                                                                                                      | [operations.CreateAssessmentLineItemRequest](../../models/operations/createassessmentlineitemrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAssessmentLineItemResponse](../../models/operations/createassessmentlineitemresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## get

Get a specific Assessment Line Item on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Assessment line item not found.'

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
  const result = await oneRoster.assessmentLineItems.get({
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
import { assessmentLineItemsGet } from "@superbuilders/oneroster/funcs/assessmentLineItemsGet.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await assessmentLineItemsGet(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetAssessmentLineItemRequest](../../models/operations/getassessmentlineitemrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAssessmentLineItemResponse](../../models/operations/getassessmentlineitemresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError2 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## update

To update an existing Assessment Line Item. The sourcedId for the record to be updated is supplied by the requesting system.

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
  const result = await oneRoster.assessmentLineItems.update({
    sourcedId: "<id>",
    requestBody: {
      assessmentLineItem: {
        status: "tobedeleted",
        title: "<value>",
      },
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
import { assessmentLineItemsUpdate } from "@superbuilders/oneroster/funcs/assessmentLineItemsUpdate.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await assessmentLineItemsUpdate(oneRoster, {
    sourcedId: "<id>",
    requestBody: {
      assessmentLineItem: {
        status: "tobedeleted",
        title: "<value>",
      },
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
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentLineItemRequest](../../models/operations/updateassessmentlineitemrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentLineItemResponse](../../models/operations/updateassessmentlineitemresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## delete

Perform a soft delete on a specific Assessment Line Item on the service provider. This operation changes the status of the Assessment Line Item to 'tobedeleted'.

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
  await oneRoster.assessmentLineItems.delete({
    sourcedId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OneRosterCore } from "@superbuilders/oneroster/core.js";
import { assessmentLineItemsDelete } from "@superbuilders/oneroster/funcs/assessmentLineItemsDelete.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await assessmentLineItemsDelete(oneRoster, {
    sourcedId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAssessmentLineItemRequest](../../models/operations/deleteassessmentlineitemrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError2          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError1 | 401                                      | application/json                         |
| errors.ForbiddenResponseError2           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |
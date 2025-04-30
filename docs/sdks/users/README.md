# Users
(*users*)

## Overview

### Available Operations

* [getResources](#getresources) - Get resources for a user
* [assignResource](#assignresource) - Assign a resource to a user
* [getAll](#getall) - Get all Users
* [create](#create) - Create a new User
* [get](#get) - Get a specific User
* [update](#update) - Update an existing User
* [delete](#delete) - Delete a User
* [getClasses](#getclasses) - Get Classes for a User

## getResources

To get the collection of resources available to a specific user. If the corresponding record cannot be located, the api will return a 404 error code and message 'User not found.'

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
  const result = await oneRoster.users.getResources({
    userSourcedId: "<id>",
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
import { usersGetResources } from "@superbuilders/oneroster/funcs/usersGetResources.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersGetResources(oneRoster, {
    userSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetResourcesForUserRequest](../../models/operations/getresourcesforuserrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetResourcesForUserResponse](../../models/operations/getresourcesforuserresponse.md)\>**

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

## assignResource

To assign an existing resource to the specified user. If the corresponding record cannot be located, the api will return a 404 error code and message 'User or resource not found.'

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
  const result = await oneRoster.users.assignResource({
    userSourcedId: "<id>",
    requestBody: {
      resource: {
        sourcedId: "<id>",
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
import { usersAssignResource } from "@superbuilders/oneroster/funcs/usersAssignResource.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersAssignResource(oneRoster, {
    userSourcedId: "<id>",
    requestBody: {
      resource: {
        sourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.AssignResourceToUserRequest](../../models/operations/assignresourcetouserrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

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

## getAll

To get all Users on the service provider.

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
  const result = await oneRoster.users.getAll({
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
import { usersGetAll } from "@superbuilders/oneroster/funcs/usersGetAll.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersGetAll(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetAllUsersRequest](../../models/operations/getallusersrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllUsersResponse](../../models/operations/getallusersresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError1          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError2     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## create

To create a new User on the service provider. The responding system must return the set of sourcedIds that have been allocated to the newly created user record.

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
  const result = await oneRoster.users.create({
    user: {
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [],
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
import { usersCreate } from "@superbuilders/oneroster/funcs/usersCreate.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersCreate(oneRoster, {
    user: {
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [],
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
| `request`                                                                                                                                                                      | [operations.CreateUserRequest](../../models/operations/createuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)\>**

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

## get

To get a specific User on the service provider.

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
  const result = await oneRoster.users.get({
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
import { usersGet } from "@superbuilders/oneroster/funcs/usersGet.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersGet(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetUserRequest](../../models/operations/getuserrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserResponse](../../models/operations/getuserresponse.md)\>**

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

## update

To update an existing User on the service provider. The sourcedId for the record to be updated is supplied by the requesting system.

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
  const result = await oneRoster.users.update({
    sourcedId: "<id>",
    requestBody: {
      user: {
        enabledUser: true,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "primary",
            role: "student",
            org: {
              sourcedId: "<id>",
            },
          },
          {
            roleType: "primary",
            role: "guardian",
            org: {
              sourcedId: "<id>",
            },
          },
        ],
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
import { usersUpdate } from "@superbuilders/oneroster/funcs/usersUpdate.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersUpdate(oneRoster, {
    sourcedId: "<id>",
    requestBody: {
      user: {
        enabledUser: true,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "primary",
            role: "student",
            org: {
              sourcedId: "<id>",
            },
          },
          {
            roleType: "primary",
            role: "guardian",
            org: {
              sourcedId: "<id>",
            },
          },
        ],
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
| `request`                                                                                                                                                                      | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateUserResponse](../../models/operations/updateuserresponse.md)\>**

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

Perform a soft delete on a specific User on the service provider. This operation changes the status of the User to 'tobedeleted'.

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
  await oneRoster.users.delete({
    sourcedId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OneRosterCore } from "@superbuilders/oneroster/core.js";
import { usersDelete } from "@superbuilders/oneroster/funcs/usersDelete.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersDelete(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError1          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError2            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse1      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## getClasses

To get the set of Classes a User is enrolled in.

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
  const result = await oneRoster.users.getClasses({
    userSourcedId: "<id>",
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
import { usersGetClasses } from "@superbuilders/oneroster/funcs/usersGetClasses.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await usersGetClasses(oneRoster, {
    userSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetClassesForUserRequest](../../models/operations/getclassesforuserrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetClassesForUserResponse](../../models/operations/getclassesforuserresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.BadRequestResponseError1          | 400                                      | application/json                         |
| errors.UnauthorizedRequestResponseError2 | 401                                      | application/json                         |
| errors.ForbiddenResponseError1           | 403                                      | application/json                         |
| errors.NotFoundResponseError1            | 404                                      | application/json                         |
| errors.UnprocessableEntityResponseError1 | 422                                      | application/json                         |
| errors.TooManyRequestsResponseError1     | 429                                      | application/json                         |
| errors.InternalServerErrorResponse2      | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |
# TeachersManagement
(*teachersManagement*)

## Overview

This enables the management of information about teachers (a teacher is a type of 'user').

### Available Operations

* [getTeachersForClass](#getteachersforclass) - Get teachers for a Class
* [addTeacherToClass](#addteachertoclass) - Add a teacher to a Class
* [getTeachersForClassInSchool](#getteachersforclassinschool) - Get Teachers for a specific Class in a School
* [getTeachersForSchool](#getteachersforschool) - Get all teachers for a school
* [getAllTeachers](#getallteachers) - Get all Teachers
* [getTeacher](#getteacher) - Get a specific Teacher
* [getClassesForTeacher](#getclassesforteacher) - Get Classes for a Teacher

## getTeachersForClass

To get all teachers assigned to a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getTeachersForClass({
    classSourcedId: "<id>",
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
import { teachersManagementGetTeachersForClass } from "@superbuilders/oneroster/funcs/teachersManagementGetTeachersForClass.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetTeachersForClass(oneRoster, {
    classSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetTeachersForClassRequest](../../models/operations/getteachersforclassrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeachersForClassResponse](../../models/operations/getteachersforclassresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## addTeacherToClass

Enrolls a teacher to a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.addTeacherToClass({
    classSourcedId: "<id>",
    requestBody: {
      enrollment: {
        user: {
          sourcedId: "<id>",
        },
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
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
import { teachersManagementAddTeacherToClass } from "@superbuilders/oneroster/funcs/teachersManagementAddTeacherToClass.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementAddTeacherToClass(oneRoster, {
    classSourcedId: "<id>",
    requestBody: {
      enrollment: {
        user: {
          sourcedId: "<id>",
        },
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
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
| `request`                                                                                                                                                                      | [operations.AddTeacherToClassRequest](../../models/operations/addteachertoclassrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddTeacherToClassResponse](../../models/operations/addteachertoclassresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getTeachersForClassInSchool

To get all Teachers for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getTeachersForClassInSchool({
    schoolSourcedId: "<id>",
    classSourcedId: "<id>",
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
import { teachersManagementGetTeachersForClassInSchool } from "@superbuilders/oneroster/funcs/teachersManagementGetTeachersForClassInSchool.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetTeachersForClassInSchool(oneRoster, {
    schoolSourcedId: "<id>",
    classSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetTeachersForClassInSchoolRequest](../../models/operations/getteachersforclassinschoolrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeachersForClassInSchoolResponse](../../models/operations/getteachersforclassinschoolresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getTeachersForSchool

To get all Teachers for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getTeachersForSchool({
    schoolSourcedId: "<id>",
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
import { teachersManagementGetTeachersForSchool } from "@superbuilders/oneroster/funcs/teachersManagementGetTeachersForSchool.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetTeachersForSchool(oneRoster, {
    schoolSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetTeachersForSchoolRequest](../../models/operations/getteachersforschoolrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeachersForSchoolResponse](../../models/operations/getteachersforschoolresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getAllTeachers

To get all Teachers on the service provider.

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getAllTeachers({
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
import { teachersManagementGetAllTeachers } from "@superbuilders/oneroster/funcs/teachersManagementGetAllTeachers.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetAllTeachers(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetAllTeachersRequest](../../models/operations/getallteachersrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllTeachersResponse](../../models/operations/getallteachersresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getTeacher

To get a specific Teacher on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Teacher not found.'

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getTeacher({
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
import { teachersManagementGetTeacher } from "@superbuilders/oneroster/funcs/teachersManagementGetTeacher.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetTeacher(oneRoster, {
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
| `request`                                                                                                                                                                      | [operations.GetTeacherRequest](../../models/operations/getteacherrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeacherResponse](../../models/operations/getteacherresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## getClassesForTeacher

To get the set of Classes a Teacher is enrolled in. If the specified teacher cannot be identified within the service provider, the api will return a 404 error code and message 'Teacher not found.'

### Example Usage

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.teachersManagement.getClassesForTeacher({
    teacherSourcedId: "<id>",
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
import { teachersManagementGetClassesForTeacher } from "@superbuilders/oneroster/funcs/teachersManagementGetClassesForTeacher.js";

// Use `OneRosterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oneRoster = new OneRosterCore({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const res = await teachersManagementGetClassesForTeacher(oneRoster, {
    teacherSourcedId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetClassesForTeacherRequest](../../models/operations/getclassesforteacherrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetClassesForTeacherResponse](../../models/operations/getclassesforteacherresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestResponseError          | 400                                     | application/json                        |
| errors.UnauthorizedRequestResponseError | 401                                     | application/json                        |
| errors.ForbiddenResponseError           | 403                                     | application/json                        |
| errors.NotFoundResponseError            | 404                                     | application/json                        |
| errors.UnprocessableEntityResponseError | 422                                     | application/json                        |
| errors.TooManyRequestsResponseError     | 429                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |
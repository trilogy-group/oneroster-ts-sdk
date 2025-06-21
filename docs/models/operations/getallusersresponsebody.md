# GetAllUsersResponseBody

Successful response containing a collection of users

## Example Usage

```typescript
import { GetAllUsersResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllUsersResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [],
      agents: [],
    },
  ],
  totalCount: 7438.29,
  pageCount: 2249.34,
  pageNumber: 4277.09,
  offset: 5009.53,
  limit: 8645.19,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `users`                                                                    | [operations.GetAllUsersUser](../../models/operations/getallusersuser.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
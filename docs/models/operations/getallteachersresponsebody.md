# GetAllTeachersResponseBody

Successful response containing a collection of teachers

## Example Usage

```typescript
import { GetAllTeachersResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllTeachersResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: true,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "teacher",
          org: {
            href: "https://nutritious-morning.net",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [],
    },
  ],
  totalCount: 3374.15,
  pageCount: 5721.78,
  pageNumber: 5731.21,
  offset: 7193.47,
  limit: 1432.55,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `users`                                                                          | [operations.GetAllTeachersUser](../../models/operations/getallteachersuser.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageNumber`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `limit`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
# GetAllTeachersResponseBody

Successful response containing a collection of teachers

## Example Usage

```typescript
import { GetAllTeachersResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllTeachersResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "parent",
          org: {
            href: "https://foolish-violin.biz",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://edible-fit.name",
          sourcedId: "<id>",
          type: "resource",
        },
      ],
    },
  ],
  totalCount: 7193.47,
  pageCount: 1432.55,
  pageNumber: 8306.68,
  offset: 8514.43,
  limit: 32.27,
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
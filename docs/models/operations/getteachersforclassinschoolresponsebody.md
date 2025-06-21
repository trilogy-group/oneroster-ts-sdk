# GetTeachersForClassInSchoolResponseBody

Collection of teachers successfully retrieved

## Example Usage

```typescript
import { GetTeachersForClassInSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassInSchoolResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: true,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "administrator",
          org: {
            href: "https://timely-underneath.com",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://everlasting-hope.info/",
          sourcedId: "<id>",
          type: "term",
        },
      ],
    },
  ],
  totalCount: 7492.81,
  pageCount: 4668.19,
  pageNumber: 8397.7,
  offset: 8892.12,
  limit: 7148.9,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | [operations.GetTeachersForClassInSchoolUser](../../models/operations/getteachersforclassinschooluser.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `totalCount`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageCount`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageNumber`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `offset`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
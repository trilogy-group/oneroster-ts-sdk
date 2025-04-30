# GetStudentsForClassInSchoolResponseBody

Collection of students successfully retrieved

## Example Usage

```typescript
import { GetStudentsForClassInSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForClassInSchoolResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "proctor",
          org: {
            href: "https://humble-department.com",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://average-illusion.net",
          sourcedId: "<id>",
          type: "category",
        },
      ],
    },
  ],
  totalCount: 8696.09,
  pageCount: 5017.91,
  pageNumber: 7629.68,
  offset: 2365.39,
  limit: 3729.5,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | [operations.GetStudentsForClassInSchoolUser](../../models/operations/getstudentsforclassinschooluser.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `totalCount`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageCount`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageNumber`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `offset`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
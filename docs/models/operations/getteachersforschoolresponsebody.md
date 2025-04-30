# GetTeachersForSchoolResponseBody

Collection of teachers successfully retrieved

## Example Usage

```typescript
import { GetTeachersForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForSchoolResponseBody = {
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
          role: "guardian",
          org: {
            href: "https://amazing-lifestyle.info",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://aggressive-maestro.name",
          sourcedId: "<id>",
          type: "student",
        },
      ],
    },
  ],
  totalCount: 2104.28,
  pageCount: 8421.8,
  pageNumber: 1359.72,
  offset: 3921.02,
  limit: 1892.51,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `users`                                                                                      | [operations.GetTeachersForSchoolUser](../../models/operations/getteachersforschooluser.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `totalCount`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageCount`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageNumber`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `offset`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `limit`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
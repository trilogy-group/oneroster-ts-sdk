# GetStudentsForSchoolResponseBody

Collection of students successfully retrieved

## Example Usage

```typescript
import { GetStudentsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForSchoolResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "student",
          org: {
            href: "https://whole-dulcimer.org",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://all-papa.org",
          sourcedId: "<id>",
          type: "componentResource",
        },
      ],
    },
  ],
  totalCount: 4176.03,
  pageCount: 8254.8,
  pageNumber: 7615.83,
  offset: 6292.03,
  limit: 8727.79,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `users`                                                                                      | [operations.GetStudentsForSchoolUser](../../models/operations/getstudentsforschooluser.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `totalCount`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageCount`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageNumber`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `offset`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `limit`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
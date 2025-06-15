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
          role: "guardian",
          org: {
            href: "https://acceptable-impact.org/",
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
  totalCount: 6436.26,
  pageCount: 9736.94,
  pageNumber: 9326.17,
  offset: 4176.03,
  limit: 8254.8,
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
# GetAllStudentsResponseBody

Successful response containing a collection of students

## Example Usage

```typescript
import { GetAllStudentsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsResponseBody = {
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
          role: "aide",
          org: {
            href: "https://unfinished-quart.org",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: null,
        },
      ],
      agents: [],
    },
  ],
  totalCount: 463.79,
  pageCount: 9395.4,
  pageNumber: 6658.25,
  offset: 9954.84,
  limit: 8345.68,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `users`                                                                          | [operations.GetAllStudentsUser](../../models/operations/getallstudentsuser.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageNumber`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `limit`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
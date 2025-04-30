# GetAllStudentsResponseBody

Successful response containing a collection of students

## Example Usage

```typescript
import { GetAllStudentsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsResponseBody = {
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
          role: "teacher",
          org: {
            href: "https://realistic-coin.com",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://jaunty-archaeology.org/",
          sourcedId: "<id>",
          type: "scoreScale",
        },
      ],
    },
  ],
  totalCount: 9954.84,
  pageCount: 8345.68,
  pageNumber: 709.59,
  offset: 2587.49,
  limit: 4904.41,
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
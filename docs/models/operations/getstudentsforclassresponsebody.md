# GetStudentsForClassResponseBody

Successful response with the list of students

## Example Usage

```typescript
import { GetStudentsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForClassResponseBody = {
  students: [
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
            href: "https://aged-innovation.net/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://bare-ghost.info/",
          sourcedId: "<id>",
          type: "gradingPeriod",
        },
      ],
    },
  ],
  totalCount: 5025.56,
  pageCount: 8753.25,
  pageNumber: 6574.71,
  offset: 6007.47,
  limit: 4275.26,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `students`                                                 | [operations.Student](../../models/operations/student.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageCount`                                                | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageNumber`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `offset`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
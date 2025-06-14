# GetTeachersForClassResponseBody

Successful response with the list of teachers

## Example Usage

```typescript
import { GetTeachersForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassResponseBody = {
  teachers: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "aide",
          org: {
            href: "https://flashy-forage.org/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: null,
        },
      ],
      agents: [
        {
          href: "https://jittery-doorpost.org/",
          sourcedId: "<id>",
          type: "enrollment",
        },
      ],
    },
  ],
  totalCount: 2079.52,
  pageCount: 8981.95,
  pageNumber: 6282.15,
  offset: 5601.55,
  limit: 5876.73,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `teachers`                                                 | [operations.Teacher](../../models/operations/teacher.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageCount`                                                | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageNumber`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `offset`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
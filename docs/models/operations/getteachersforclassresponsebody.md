# GetTeachersForClassResponseBody

Successful response with the list of teachers

## Example Usage

```typescript
import { GetTeachersForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassResponseBody = {
  teachers: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "proctor",
          org: {
            href: "https://key-comestible.info",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://trim-hippodrome.info/",
          sourcedId: "<id>",
          type: "demographics",
        },
      ],
    },
  ],
  totalCount: 9015.96,
  pageCount: 3411.01,
  pageNumber: 2079.52,
  offset: 8981.95,
  limit: 6282.15,
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
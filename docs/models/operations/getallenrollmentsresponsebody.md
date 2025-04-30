# GetAllEnrollmentsResponseBody

Successful response

## Example Usage

```typescript
import { GetAllEnrollmentsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllEnrollmentsResponseBody = {
  enrollments: [
    {
      sourcedId: "<id>",
      status: "active",
      role: "teacher",
      primary: false,
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        href: "https://uneven-divine.name/",
        sourcedId: "<id>",
        type: "<value>",
      },
      class: {
        href: "https://new-runway.org",
        sourcedId: "<id>",
        type: "<value>",
      },
    },
  ],
  totalCount: 6719.22,
  pageCount: 6907.76,
  pageNumber: 6864.67,
  offset: 4675.84,
  limit: 1933.65,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `enrollments`                                                    | [components.Enrollment](../../models/components/enrollment.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `totalCount`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `pageCount`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `pageNumber`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `offset`                                                         | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `limit`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
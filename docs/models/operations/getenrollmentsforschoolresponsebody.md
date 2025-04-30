# GetEnrollmentsForSchoolResponseBody

Collection of enrollments successfully retrieved

## Example Usage

```typescript
import { GetEnrollmentsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForSchoolResponseBody = {
  enrollments: [
    {
      sourcedId: "<id>",
      status: "active",
      role: "teacher",
      primary: false,
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        href: "https://pricey-pharmacopoeia.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      class: {
        href: "https://deserted-gym.org/",
        sourcedId: "<id>",
        type: "<value>",
      },
    },
  ],
  totalCount: 4372.28,
  pageCount: 5632.41,
  pageNumber: 4280.25,
  offset: 8169.15,
  limit: 4364.48,
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
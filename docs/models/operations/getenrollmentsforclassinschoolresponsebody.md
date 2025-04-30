# GetEnrollmentsForClassInSchoolResponseBody

Collection of enrollments successfully retrieved

## Example Usage

```typescript
import { GetEnrollmentsForClassInSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForClassInSchoolResponseBody = {
  enrollments: [
    {
      sourcedId: "<id>",
      status: "active",
      role: "teacher",
      primary: false,
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        href: "https://criminal-veto.name/",
        sourcedId: "<id>",
        type: "<value>",
      },
      class: {
        href: "https://enchanted-strait.com",
        sourcedId: "<id>",
        type: "<value>",
      },
    },
  ],
  totalCount: 5746.55,
  pageCount: 8068.54,
  pageNumber: 5044.18,
  offset: 9310.55,
  limit: 7247.36,
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
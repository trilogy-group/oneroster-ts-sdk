# GetEnrollmentsForSchoolResponse

## Example Usage

```typescript
import { GetEnrollmentsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForSchoolResponse = {
  result: {
    enrollments: [
      {
        sourcedId: "<id>",
        status: "active",
        role: "administrator",
        primary: false,
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
        user: {
          href: "https://likable-king.name",
          sourcedId: "<id>",
          type: "<value>",
        },
        class: {
          href: "https://fine-willow.info/",
          sourcedId: "<id>",
          type: "<value>",
        },
      },
    ],
    totalCount: 9821.5,
    pageCount: 9661.54,
    pageNumber: 3813.06,
    offset: 8916.87,
    limit: 9290.09,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.GetEnrollmentsForSchoolResponseBody](../../models/operations/getenrollmentsforschoolresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
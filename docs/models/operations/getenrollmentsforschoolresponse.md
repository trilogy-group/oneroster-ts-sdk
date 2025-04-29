# GetEnrollmentsForSchoolResponse

Collection of enrollments successfully retrieved

## Example Usage

```typescript
import { GetEnrollmentsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForSchoolResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `enrollments`                                                    | [components.Enrollment](../../models/components/enrollment.md)[] | :heavy_check_mark:                                               | N/A                                                              |
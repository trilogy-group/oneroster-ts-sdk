# GetEnrollmentsForClassInSchoolResponse

Collection of enrollments successfully retrieved

## Example Usage

```typescript
import { GetEnrollmentsForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForClassInSchoolResponse = {
  enrollments: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      role: "proctor",
      primary: false,
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        href: "https://miserly-stitcher.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      class: {
        href: "https://sniveling-cosset.net/",
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
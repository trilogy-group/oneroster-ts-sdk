# GetAllEnrollmentsResponse

Successful response

## Example Usage

```typescript
import { GetAllEnrollmentsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllEnrollmentsResponse = {
  enrollments: [
    {
      sourcedId: "<id>",
      status: "active",
      role: "teacher",
      primary: false,
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        href: "https://lavish-godfather.com",
        sourcedId: "<id>",
        type: "<value>",
      },
      class: {
        href: "https://happy-go-lucky-harp.info",
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
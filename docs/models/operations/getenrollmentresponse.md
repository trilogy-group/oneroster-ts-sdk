# GetEnrollmentResponse

Successful response

## Example Usage

```typescript
import { GetEnrollmentResponse } from "oneroster/models/operations";

let value: GetEnrollmentResponse = {
  enrollment: {
    sourcedId: "<id>",
    status: "tobedeleted",
    role: "teacher",
    primary: false,
    beginDate: "2024-01-01",
    endDate: "2024-01-01",
    user: {
      href: "https://enlightened-invite.net/",
      sourcedId: "<id>",
      type: "<value>",
    },
    class: {
      href: "https://improbable-range.net/",
      sourcedId: "<id>",
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `enrollment`                                                   | [components.Enrollment](../../models/components/enrollment.md) | :heavy_check_mark:                                             | Represents an enrollment.                                      |
# GetEnrollmentResponse

Successful response

## Example Usage

```typescript
import { GetEnrollmentResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentResponse = {
  enrollment: {
    sourcedId: "<id>",
    status: "tobedeleted",
    role: "teacher",
    primary: true,
    beginDate: "2024-01-01",
    endDate: "2024-01-01",
    user: {
      href: "https://lumpy-account.net",
      sourcedId: "<id>",
      type: "<value>",
    },
    class: {
      href: "https://sarcastic-tackle.name/",
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
# CreateEnrollmentRequest

## Example Usage

```typescript
import { CreateEnrollmentRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateEnrollmentRequest = {
  enrollment: {
    role: "student",
    beginDate: "2024-01-01",
    endDate: "2024-01-01",
    user: {
      sourcedId: "<id>",
    },
    class: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `enrollment`                                                                                   | [operations.CreateEnrollmentEnrollment](../../models/operations/createenrollmentenrollment.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
# AddStudentToClassRequestBody

## Example Usage

```typescript
import { AddStudentToClassRequestBody } from "oneroster/models/operations";

let value: AddStudentToClassRequestBody = {
  enrollment: {
    user: {
      sourcedId: "<id>",
    },
    beginDate: "2024-01-01",
    endDate: "2024-01-01",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `enrollment`                                                                                     | [operations.AddStudentToClassEnrollment](../../models/operations/addstudenttoclassenrollment.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
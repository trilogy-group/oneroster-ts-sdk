# AddTeacherToClassRequestBody

## Example Usage

```typescript
import { AddTeacherToClassRequestBody } from "oneroster/models/operations";

let value: AddTeacherToClassRequestBody = {
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
| `enrollment`                                                                                     | [operations.AddTeacherToClassEnrollment](../../models/operations/addteachertoclassenrollment.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
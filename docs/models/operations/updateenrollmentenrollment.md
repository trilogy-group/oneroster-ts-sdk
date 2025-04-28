# UpdateEnrollmentEnrollment

## Example Usage

```typescript
import { UpdateEnrollmentEnrollment } from "oneroster/models/operations";

let value: UpdateEnrollmentEnrollment = {
  sourcedId: "<id>",
  status: "tobedeleted",
  role: "student",
  beginDate: "2024-01-01",
  endDate: "2024-01-01",
  user: {
    sourcedId: "<id>",
  },
  class: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `sourcedId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `status`                                                                               | [operations.UpdateEnrollmentStatus](../../models/operations/updateenrollmentstatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `metadata`                                                                             | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `role`                                                                                 | [operations.UpdateEnrollmentRole](../../models/operations/updateenrollmentrole.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `primary`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `beginDate`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2024-01-01                                                                             |
| `endDate`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2024-01-01                                                                             |
| `user`                                                                                 | [operations.UpdateEnrollmentUser](../../models/operations/updateenrollmentuser.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `class`                                                                                | [operations.UpdateEnrollmentClass](../../models/operations/updateenrollmentclass.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
# CreateEnrollmentEnrollment

## Example Usage

```typescript
import { CreateEnrollmentEnrollment } from "@superbuilders/oneroster/models/operations";

let value: CreateEnrollmentEnrollment = {
  role: "teacher",
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
| `sourcedId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `status`                                                                               | [operations.CreateEnrollmentStatus](../../models/operations/createenrollmentstatus.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `metadata`                                                                             | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `role`                                                                                 | [operations.CreateEnrollmentRole](../../models/operations/createenrollmentrole.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `primary`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `beginDate`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2024-01-01                                                                             |
| `endDate`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2024-01-01                                                                             |
| `user`                                                                                 | [operations.CreateEnrollmentUser](../../models/operations/createenrollmentuser.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `class`                                                                                | [operations.CreateEnrollmentClass](../../models/operations/createenrollmentclass.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
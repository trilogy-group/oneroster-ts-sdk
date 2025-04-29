# AddStudentToClassEnrollment

## Example Usage

```typescript
import { AddStudentToClassEnrollment } from "@superbuilders/oneroster/models/operations";

let value: AddStudentToClassEnrollment = {
  user: {
    sourcedId: "<id>",
  },
  beginDate: "2024-01-01",
  endDate: "2024-01-01",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `user`                                                                               | [operations.AddStudentToClassUser](../../models/operations/addstudenttoclassuser.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `primary`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `beginDate`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 2024-01-01                                                                           |
| `endDate`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 2024-01-01                                                                           |
# Enrollment

Represents an enrollment.

## Example Usage

```typescript
import { Enrollment } from "@superbuilders/oneroster/models/components";

let value: Enrollment = {
  sourcedId: "<id>",
  status: "active",
  role: "proctor",
  primary: false,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.EnrollmentStatus](../../models/components/enrollmentstatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `role`                                                                                        | [components.EnrollmentRole](../../models/components/enrollmentrole.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `primary`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `beginDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01                                                                                    |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01                                                                                    |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `class`                                                                                       | [components.EnrollmentClass](../../models/components/enrollmentclass.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
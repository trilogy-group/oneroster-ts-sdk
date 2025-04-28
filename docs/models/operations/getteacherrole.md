# GetTeacherRole

## Example Usage

```typescript
import { GetTeacherRole } from "oneroster/models/operations";

let value: GetTeacherRole = {
  roleType: "secondary",
  role: "student",
  org: {
    href: "https://these-reboot.net",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `roleType`                                                                     | [operations.GetTeacherRoleType](../../models/operations/getteacherroletype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `role`                                                                         | [operations.GetTeacherRoleEnum](../../models/operations/getteacherroleenum.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `org`                                                                          | [operations.GetTeacherOrg](../../models/operations/getteacherorg.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `userProfile`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `beginDate`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endDate`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
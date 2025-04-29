# GetAllTeachersRole

## Example Usage

```typescript
import { GetAllTeachersRole } from "@superbuilders/oneroster/models/operations";

let value: GetAllTeachersRole = {
  roleType: "secondary",
  role: "student",
  org: {
    href: "https://nutritious-morning.net",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `roleType`                                                                             | [operations.GetAllTeachersRoleType](../../models/operations/getallteachersroletype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | [operations.GetAllTeachersRoleEnum](../../models/operations/getallteachersroleenum.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `org`                                                                                  | [operations.GetAllTeachersOrg](../../models/operations/getallteachersorg.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `userProfile`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `beginDate`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endDate`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
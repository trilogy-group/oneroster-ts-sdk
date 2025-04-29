# GetAllStudentsRole

## Example Usage

```typescript
import { GetAllStudentsRole } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsRole = {
  roleType: "secondary",
  role: "parent",
  org: {
    href: "https://unfinished-quart.org",
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
| `roleType`                                                                             | [operations.GetAllStudentsRoleType](../../models/operations/getallstudentsroletype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | [operations.GetAllStudentsRoleEnum](../../models/operations/getallstudentsroleenum.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `org`                                                                                  | [operations.GetAllStudentsOrg](../../models/operations/getallstudentsorg.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `userProfile`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `beginDate`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `endDate`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
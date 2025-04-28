# GetUserRole

## Example Usage

```typescript
import { GetUserRole } from "oneroster/models/operations";

let value: GetUserRole = {
  roleType: "primary",
  role: "teacher",
  org: {
    href: "https://excellent-receptor.com",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `roleType`                                                               | [operations.GetUserRoleType](../../models/operations/getuserroletype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `role`                                                                   | [operations.GetUserRoleEnum](../../models/operations/getuserroleenum.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `org`                                                                    | [operations.GetUserOrg](../../models/operations/getuserorg.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `userProfile`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `beginDate`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `endDate`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
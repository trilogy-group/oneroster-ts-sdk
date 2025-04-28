# GetAllUsersRole

## Example Usage

```typescript
import { GetAllUsersRole } from "oneroster/models/operations";

let value: GetAllUsersRole = {
  roleType: "secondary",
  role: "guardian",
  org: {
    href: "https://broken-cd.biz/",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `roleType`                                                                       | [operations.GetAllUsersRoleType](../../models/operations/getallusersroletype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `role`                                                                           | [operations.GetAllUsersRoleEnum](../../models/operations/getallusersroleenum.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `org`                                                                            | [operations.GetAllUsersOrg](../../models/operations/getallusersorg.md)           | :heavy_check_mark:                                                               | N/A                                                                              |
| `userProfile`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `beginDate`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `endDate`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
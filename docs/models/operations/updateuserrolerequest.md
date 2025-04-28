# UpdateUserRoleRequest

## Example Usage

```typescript
import { UpdateUserRoleRequest } from "oneroster/models/operations";

let value: UpdateUserRoleRequest = {
  roleType: "primary",
  role: "aide",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `roleType`                                                                                   | [operations.UpdateUserRoleTypeRequest](../../models/operations/updateuserroletyperequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [operations.UpdateUserRoleRequestEnum](../../models/operations/updateuserrolerequestenum.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `org`                                                                                        | [operations.UpdateUserOrgRequest](../../models/operations/updateuserorgrequest.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `userProfile`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `beginDate`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `endDate`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
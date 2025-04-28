# CreateUserRoleRequest

## Example Usage

```typescript
import { CreateUserRoleRequest } from "oneroster/models/operations";

let value: CreateUserRoleRequest = {
  roleType: "secondary",
  role: "proctor",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `roleType`                                                                                   | [operations.CreateUserRoleTypeRequest](../../models/operations/createuserroletyperequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [operations.CreateUserRoleRequestEnum](../../models/operations/createuserrolerequestenum.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `org`                                                                                        | [operations.CreateUserOrgRequest](../../models/operations/createuserorgrequest.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `userProfile`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `beginDate`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `endDate`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
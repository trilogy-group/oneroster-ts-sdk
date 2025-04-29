# CreateUserRoleResponse

## Example Usage

```typescript
import { CreateUserRoleResponse } from "@superbuilders/oneroster/models/operations";

let value: CreateUserRoleResponse = {
  roleType: "secondary",
  role: "parent",
  org: {
    href: "https://genuine-joy.info",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `roleType`                                                                                     | [operations.CreateUserRoleTypeResponse](../../models/operations/createuserroletyperesponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `role`                                                                                         | [operations.CreateUserRoleResponseEnum](../../models/operations/createuserroleresponseenum.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `org`                                                                                          | [operations.CreateUserOrgResponse](../../models/operations/createuserorgresponse.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `userProfile`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `beginDate`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `endDate`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
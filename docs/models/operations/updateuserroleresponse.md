# UpdateUserRoleResponse

## Example Usage

```typescript
import { UpdateUserRoleResponse } from "@superbuilders/oneroster/models/operations";

let value: UpdateUserRoleResponse = {
  roleType: "primary",
  role: "relative",
  org: {
    href: "https://bowed-gazebo.com",
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
| `roleType`                                                                                     | [operations.UpdateUserRoleTypeResponse](../../models/operations/updateuserroletyperesponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `role`                                                                                         | [operations.UpdateUserRoleResponseEnum](../../models/operations/updateuserroleresponseenum.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `org`                                                                                          | [operations.UpdateUserOrgResponse](../../models/operations/updateuserorgresponse.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `userProfile`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `beginDate`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `endDate`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
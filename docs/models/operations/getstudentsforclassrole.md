# GetStudentsForClassRole

## Example Usage

```typescript
import { GetStudentsForClassRole } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForClassRole = {
  roleType: "primary",
  role: "administrator",
  org: {
    href: "https://first-tenant.name",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: null,
  endDate: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `roleType`                                                                                       | [operations.GetStudentsForClassRoleType](../../models/operations/getstudentsforclassroletype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `role`                                                                                           | [operations.GetStudentsForClassRoleEnum](../../models/operations/getstudentsforclassroleenum.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `org`                                                                                            | [operations.GetStudentsForClassOrg](../../models/operations/getstudentsforclassorg.md)           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userProfile`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `beginDate`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `endDate`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
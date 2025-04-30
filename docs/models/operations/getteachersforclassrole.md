# GetTeachersForClassRole

## Example Usage

```typescript
import { GetTeachersForClassRole } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassRole = {
  roleType: "secondary",
  role: "teacher",
  org: {
    href: "https://flashy-forage.org/",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `roleType`                                                                                       | [operations.GetTeachersForClassRoleType](../../models/operations/getteachersforclassroletype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `role`                                                                                           | [operations.GetTeachersForClassRoleEnum](../../models/operations/getteachersforclassroleenum.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `org`                                                                                            | [operations.GetTeachersForClassOrg](../../models/operations/getteachersforclassorg.md)           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userProfile`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `beginDate`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `endDate`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
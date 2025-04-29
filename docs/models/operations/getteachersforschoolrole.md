# GetTeachersForSchoolRole

## Example Usage

```typescript
import { GetTeachersForSchoolRole } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForSchoolRole = {
  roleType: "primary",
  role: "student",
  org: {
    href: "https://bruised-roadway.name",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `roleType`                                                                                         | [operations.GetTeachersForSchoolRoleType](../../models/operations/getteachersforschoolroletype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `role`                                                                                             | [operations.GetTeachersForSchoolRoleEnum](../../models/operations/getteachersforschoolroleenum.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `org`                                                                                              | [operations.GetTeachersForSchoolOrg](../../models/operations/getteachersforschoolorg.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userProfile`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `beginDate`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endDate`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
# GetTeachersForClassInSchoolRole

## Example Usage

```typescript
import { GetTeachersForClassInSchoolRole } from "oneroster/models/operations";

let value: GetTeachersForClassInSchoolRole = {
  roleType: "primary",
  role: "guardian",
  org: {
    href: "https://timely-underneath.com",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `roleType`                                                                                                       | [operations.GetTeachersForClassInSchoolRoleType](../../models/operations/getteachersforclassinschoolroletype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [operations.GetTeachersForClassInSchoolRoleEnum](../../models/operations/getteachersforclassinschoolroleenum.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `org`                                                                                                            | [operations.GetTeachersForClassInSchoolOrg](../../models/operations/getteachersforclassinschoolorg.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `userProfile`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `beginDate`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endDate`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
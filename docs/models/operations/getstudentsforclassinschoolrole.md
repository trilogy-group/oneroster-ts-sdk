# GetStudentsForClassInSchoolRole

## Example Usage

```typescript
import { GetStudentsForClassInSchoolRole } from "oneroster/models/operations";

let value: GetStudentsForClassInSchoolRole = {
  roleType: "primary",
  role: "aide",
  org: {
    href: "https://gorgeous-cuckoo.info/",
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
| `roleType`                                                                                                       | [operations.GetStudentsForClassInSchoolRoleType](../../models/operations/getstudentsforclassinschoolroletype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [operations.GetStudentsForClassInSchoolRoleEnum](../../models/operations/getstudentsforclassinschoolroleenum.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `org`                                                                                                            | [operations.GetStudentsForClassInSchoolOrg](../../models/operations/getstudentsforclassinschoolorg.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `userProfile`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `beginDate`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endDate`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
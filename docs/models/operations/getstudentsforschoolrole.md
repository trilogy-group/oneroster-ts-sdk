# GetStudentsForSchoolRole

## Example Usage

```typescript
import { GetStudentsForSchoolRole } from "oneroster/models/operations";

let value: GetStudentsForSchoolRole = {
  roleType: "secondary",
  role: "relative",
  org: {
    href: "https://acceptable-impact.org/",
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
| `roleType`                                                                                         | [operations.GetStudentsForSchoolRoleType](../../models/operations/getstudentsforschoolroletype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `role`                                                                                             | [operations.GetStudentsForSchoolRoleEnum](../../models/operations/getstudentsforschoolroleenum.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `org`                                                                                              | [operations.GetStudentsForSchoolOrg](../../models/operations/getstudentsforschoolorg.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userProfile`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `beginDate`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endDate`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
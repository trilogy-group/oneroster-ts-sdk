# GetStudentRole

## Example Usage

```typescript
import { GetStudentRole } from "oneroster/models/operations";

let value: GetStudentRole = {
  roleType: "secondary",
  role: "relative",
  org: {
    href: "https://self-assured-deer.info/",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `roleType`                                                                     | [operations.GetStudentRoleType](../../models/operations/getstudentroletype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `role`                                                                         | [operations.GetStudentRoleEnum](../../models/operations/getstudentroleenum.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `org`                                                                          | [operations.GetStudentOrg](../../models/operations/getstudentorg.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `userProfile`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `beginDate`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `endDate`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
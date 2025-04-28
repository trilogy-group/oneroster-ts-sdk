# GetStudentsForSchoolUser

## Example Usage

```typescript
import { GetStudentsForSchoolUser } from "oneroster/models/operations";

let value: GetStudentsForSchoolUser = {
  sourcedId: "<id>",
  status: "active",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "secondary",
      role: "aide",
      org: {
        href: "https://austere-grandson.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://ignorant-cruelty.biz/",
      sourcedId: "<id>",
      type: "student",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.GetStudentsForSchoolStatus](../../models/operations/getstudentsforschoolstatus.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `dateLastModified`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `userMasterIdentifier`                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `username`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `userIds`                                                                                              | [operations.GetStudentsForSchoolUserId](../../models/operations/getstudentsforschooluserid.md)[]       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `enabledUser`                                                                                          | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `givenName`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `familyName`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `middleName`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `roles`                                                                                                | [operations.GetStudentsForSchoolRole](../../models/operations/getstudentsforschoolrole.md)[]           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `agents`                                                                                               | [operations.GetStudentsForSchoolAgent](../../models/operations/getstudentsforschoolagent.md)[]         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `primaryOrg`                                                                                           | [operations.GetStudentsForSchoolPrimaryOrg](../../models/operations/getstudentsforschoolprimaryorg.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `email`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `preferredFirstName`                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `preferredMiddleName`                                                                                  | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `preferredLastName`                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `pronouns`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `grades`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `password`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `sms`                                                                                                  | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `phone`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
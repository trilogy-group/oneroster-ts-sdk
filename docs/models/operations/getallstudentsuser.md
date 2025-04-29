# GetAllStudentsUser

## Example Usage

```typescript
import { GetAllStudentsUser } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsUser = {
  sourcedId: "<id>",
  status: "tobedeleted",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "primary",
      role: "parent",
      org: {
        href: "https://sad-kinase.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://educated-tribe.org/",
      sourcedId: "<id>",
      type: "student",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllStudentsStatus](../../models/operations/getallstudentsstatus.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userMasterIdentifier`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userIds`                                                                                     | [operations.GetAllStudentsUserId](../../models/operations/getallstudentsuserid.md)[]          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enabledUser`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `givenName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `familyName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `middleName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [operations.GetAllStudentsRole](../../models/operations/getallstudentsrole.md)[]              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agents`                                                                                      | [operations.GetAllStudentsAgent](../../models/operations/getallstudentsagent.md)[]            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `primaryOrg`                                                                                  | [operations.GetAllStudentsPrimaryOrg](../../models/operations/getallstudentsprimaryorg.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredFirstName`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredMiddleName`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredLastName`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pronouns`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grades`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `password`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sms`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `phone`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
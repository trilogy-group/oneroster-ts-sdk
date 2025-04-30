# Teacher

## Example Usage

```typescript
import { Teacher } from "@superbuilders/oneroster/models/operations";

let value: Teacher = {
  sourcedId: "<id>",
  status: "active",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "primary",
      role: "guardian",
      org: {
        href: "https://shallow-sport.com/",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://well-worn-flat.net",
      sourcedId: "<id>",
      type: "teacher",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.GetTeachersForClassStatus](../../models/operations/getteachersforclassstatus.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `userMasterIdentifier`                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `username`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `userIds`                                                                                            | [operations.GetTeachersForClassUserId](../../models/operations/getteachersforclassuserid.md)[]       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `enabledUser`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `givenName`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `familyName`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `middleName`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `roles`                                                                                              | [operations.GetTeachersForClassRole](../../models/operations/getteachersforclassrole.md)[]           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `agents`                                                                                             | [operations.GetTeachersForClassAgent](../../models/operations/getteachersforclassagent.md)[]         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `primaryOrg`                                                                                         | [operations.GetTeachersForClassPrimaryOrg](../../models/operations/getteachersforclassprimaryorg.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `email`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `preferredFirstName`                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `preferredMiddleName`                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `preferredLastName`                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `pronouns`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `grades`                                                                                             | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `password`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `sms`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `phone`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
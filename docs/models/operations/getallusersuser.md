# GetAllUsersUser

## Example Usage

```typescript
import { GetAllUsersUser } from "@superbuilders/oneroster/models/operations";

let value: GetAllUsersUser = {
  sourcedId: "<id>",
  status: "active",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "secondary",
      role: "proctor",
      org: {
        href: "https://foolish-acquaintance.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://marvelous-legislature.name",
      sourcedId: "<id>",
      type: "courseComponent",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllUsersStatus](../../models/operations/getallusersstatus.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userMasterIdentifier`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userIds`                                                                                     | [operations.GetAllUsersUserId](../../models/operations/getallusersuserid.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enabledUser`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `givenName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `familyName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `middleName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [operations.GetAllUsersRole](../../models/operations/getallusersrole.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agents`                                                                                      | [operations.GetAllUsersAgent](../../models/operations/getallusersagent.md)[]                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `primaryOrg`                                                                                  | [operations.GetAllUsersPrimaryOrg](../../models/operations/getallusersprimaryorg.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredFirstName`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredMiddleName`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredLastName`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pronouns`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grades`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `password`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sms`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `phone`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
# GetUserUser

## Example Usage

```typescript
import { GetUserUser } from "@superbuilders/oneroster/models/operations";

let value: GetUserUser = {
  sourcedId: "<id>",
  status: "active",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "secondary",
      role: "relative",
      org: {
        href: "https://minor-optimal.biz",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://leading-bench.biz",
      sourcedId: "<id>",
      type: "class",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetUserStatus](../../models/operations/getuserstatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userMasterIdentifier`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userIds`                                                                                     | [operations.GetUserUserId](../../models/operations/getuseruserid.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enabledUser`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `givenName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `familyName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `middleName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [operations.GetUserRole](../../models/operations/getuserrole.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agents`                                                                                      | [operations.GetUserAgent](../../models/operations/getuseragent.md)[]                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `primaryOrg`                                                                                  | [operations.GetUserPrimaryOrg](../../models/operations/getuserprimaryorg.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredFirstName`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredMiddleName`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `preferredLastName`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pronouns`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grades`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `password`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sms`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `phone`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
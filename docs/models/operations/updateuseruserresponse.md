# UpdateUserUserResponse

## Example Usage

```typescript
import { UpdateUserUserResponse } from "oneroster/models/operations";

let value: UpdateUserUserResponse = {
  sourcedId: "<id>",
  status: "tobedeleted",
  enabledUser: false,
  givenName: "<value>",
  familyName: "<value>",
  roles: [
    {
      roleType: "secondary",
      role: "proctor",
      org: {
        href: "https://obvious-nectarine.biz/",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://proper-hydrolyze.org",
      sourcedId: "<id>",
      type: "academicSession",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.UpdateUserStatusResponse](../../models/operations/updateuserstatusresponse.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `userMasterIdentifier`                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `username`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `userIds`                                                                                          | [operations.UpdateUserUserIdResponse](../../models/operations/updateuseruseridresponse.md)[]       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `enabledUser`                                                                                      | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `givenName`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `familyName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `middleName`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `roles`                                                                                            | [operations.UpdateUserRoleResponse](../../models/operations/updateuserroleresponse.md)[]           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `agents`                                                                                           | [operations.UpdateUserAgentResponse](../../models/operations/updateuseragentresponse.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `primaryOrg`                                                                                       | [operations.UpdateUserPrimaryOrgResponse](../../models/operations/updateuserprimaryorgresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `email`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredFirstName`                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredMiddleName`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredLastName`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `pronouns`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `grades`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `password`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sms`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `phone`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
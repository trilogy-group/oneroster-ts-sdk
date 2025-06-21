# CreateUserUserResponse

## Example Usage

```typescript
import { CreateUserUserResponse } from "@superbuilders/oneroster/models/operations";

let value: CreateUserUserResponse = {
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
        href: "https://genuine-joy.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      beginDate: "<value>",
      endDate: "<value>",
    },
  ],
  agents: [
    {
      href: "https://tepid-roundabout.net/",
      sourcedId: "<id>",
      type: "class",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.CreateUserStatusResponse](../../models/operations/createuserstatusresponse.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `userMasterIdentifier`                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `username`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `userIds`                                                                                          | [operations.CreateUserUserIdResponse](../../models/operations/createuseruseridresponse.md)[]       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `enabledUser`                                                                                      | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `givenName`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `familyName`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `middleName`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `roles`                                                                                            | [operations.CreateUserRoleResponse](../../models/operations/createuserroleresponse.md)[]           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `agents`                                                                                           | [operations.CreateUserAgentResponse](../../models/operations/createuseragentresponse.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `primaryOrg`                                                                                       | [operations.CreateUserPrimaryOrgResponse](../../models/operations/createuserprimaryorgresponse.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `email`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredFirstName`                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredMiddleName`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `preferredLastName`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `pronouns`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `grades`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `password`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sms`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `phone`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
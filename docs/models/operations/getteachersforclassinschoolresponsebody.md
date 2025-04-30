# GetTeachersForClassInSchoolResponseBody

Collection of teachers successfully retrieved

## Example Usage

```typescript
import { GetTeachersForClassInSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassInSchoolResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "aide",
          org: {
            href: "https://sniveling-appliance.biz",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://zany-request.info",
          sourcedId: "<id>",
          type: "term",
        },
      ],
    },
  ],
  totalCount: 8892.12,
  pageCount: 7148.9,
  pageNumber: 3206.64,
  offset: 3434.93,
  limit: 640.53,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | [operations.GetTeachersForClassInSchoolUser](../../models/operations/getteachersforclassinschooluser.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `totalCount`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageCount`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pageNumber`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `offset`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
# GetStudentsForClassInSchoolResponse

Collection of students successfully retrieved

## Example Usage

```typescript
import { GetStudentsForClassInSchoolResponse } from "oneroster/models/operations";

let value: GetStudentsForClassInSchoolResponse = {
  users: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "administrator",
          org: {
            href: "https://miserable-earth.info",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://mushy-innovation.net",
          sourcedId: "<id>",
          type: "lineItem",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | [operations.GetStudentsForClassInSchoolUser](../../models/operations/getstudentsforclassinschooluser.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
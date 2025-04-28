# GetTeachersForClassInSchoolResponse

Collection of teachers successfully retrieved

## Example Usage

```typescript
import { GetTeachersForClassInSchoolResponse } from "oneroster/models/operations";

let value: GetTeachersForClassInSchoolResponse = {
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
          role: "relative",
          org: {
            href: "https://french-pinstripe.com",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://descriptive-vein.org/",
          sourcedId: "<id>",
          type: "org",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | [operations.GetTeachersForClassInSchoolUser](../../models/operations/getteachersforclassinschooluser.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
# GetTeachersForSchoolResponse

Collection of teachers successfully retrieved

## Example Usage

```typescript
import { GetTeachersForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForSchoolResponse = {
  users: [
    {
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
            href: "https://incomplete-consistency.com/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://illiterate-lift.net/",
          sourcedId: "<id>",
          type: "scoreScale",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `users`                                                                                      | [operations.GetTeachersForSchoolUser](../../models/operations/getteachersforschooluser.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
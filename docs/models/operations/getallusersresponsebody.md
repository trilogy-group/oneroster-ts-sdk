# GetAllUsersResponseBody

Successful response containing a collection of users

## Example Usage

```typescript
import { GetAllUsersResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllUsersResponseBody = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "student",
          org: {
            href: "https://magnificent-reorganisation.biz/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://massive-submitter.biz/",
          sourcedId: "<id>",
          type: "user",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `users`                                                                    | [operations.GetAllUsersUser](../../models/operations/getallusersuser.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
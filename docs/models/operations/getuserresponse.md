# GetUserResponse

Successful response with the user

## Example Usage

```typescript
import { GetUserResponse } from "@superbuilders/oneroster/models/operations";

let value: GetUserResponse = {
  user: {
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
          href: "https://excellent-receptor.com",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `user`                                                           | [operations.GetUserUser](../../models/operations/getuseruser.md) | :heavy_check_mark:                                               | N/A                                                              |
# GetUserResponse

Successful response with the user

## Example Usage

```typescript
import { GetUserResponse } from "oneroster/models/operations";

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
          href: "https://grubby-plastic.biz/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://urban-equal.info/",
        sourcedId: "<id>",
        type: "org",
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `user`                                                           | [operations.GetUserUser](../../models/operations/getuseruser.md) | :heavy_check_mark:                                               | N/A                                                              |
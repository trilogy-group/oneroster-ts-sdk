# UpdateUserResponse

User successfully updated

## Example Usage

```typescript
import { UpdateUserResponse } from "oneroster/models/operations";

let value: UpdateUserResponse = {
  user: {
    sourcedId: "<id>",
    status: "active",
    enabledUser: false,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "relative",
        org: {
          href: "https://classic-hoof.net/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://passionate-jazz.net",
        sourcedId: "<id>",
        type: "courseComponent",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `user`                                                                                 | [operations.UpdateUserUserResponse](../../models/operations/updateuseruserresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
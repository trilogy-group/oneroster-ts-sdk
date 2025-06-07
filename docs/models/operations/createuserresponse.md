# CreateUserResponse

User successfully created

## Example Usage

```typescript
import { CreateUserResponse } from "@superbuilders/oneroster/models/operations";

let value: CreateUserResponse = {
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
          href: "https://genuine-joy.info",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `user`                                                                                 | [operations.CreateUserUserResponse](../../models/operations/createuseruserresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
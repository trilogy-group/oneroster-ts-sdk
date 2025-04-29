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
        role: "teacher",
        org: {
          href: "https://swift-almighty.name/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://free-disposer.info",
        sourcedId: "<id>",
        type: "category",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `user`                                                                                 | [operations.CreateUserUserResponse](../../models/operations/createuseruserresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
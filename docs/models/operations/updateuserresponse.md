# UpdateUserResponse

User successfully updated

## Example Usage

```typescript
import { UpdateUserResponse } from "@superbuilders/oneroster/models/operations";

let value: UpdateUserResponse = {
  user: {
    sourcedId: "<id>",
    status: "active",
    enabledUser: true,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "proctor",
        org: {
          href: "https://bowed-gazebo.com",
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
| `user`                                                                                 | [operations.UpdateUserUserResponse](../../models/operations/updateuseruserresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
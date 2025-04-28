# CreateUserRequest

## Example Usage

```typescript
import { CreateUserRequest } from "oneroster/models/operations";

let value: CreateUserRequest = {
  user: {
    enabledUser: false,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "aide",
        org: {
          sourcedId: "<id>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `user`                                                                               | [operations.CreateUserUserRequest](../../models/operations/createuseruserrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
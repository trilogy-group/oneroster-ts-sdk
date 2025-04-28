# UpdateUserRequestBody

## Example Usage

```typescript
import { UpdateUserRequestBody } from "oneroster/models/operations";

let value: UpdateUserRequestBody = {
  user: {
    enabledUser: false,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "parent",
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
| `user`                                                                               | [operations.UpdateUserUserRequest](../../models/operations/updateuseruserrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
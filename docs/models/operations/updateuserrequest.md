# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "oneroster/models/operations";

let value: UpdateUserRequest = {
  sourcedId: "<id>",
  requestBody: {
    user: {
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "guardian",
          org: {
            sourcedId: "<id>",
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sourcedId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The sourcedId of the user to update                                                  |
| `requestBody`                                                                        | [operations.UpdateUserRequestBody](../../models/operations/updateuserrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
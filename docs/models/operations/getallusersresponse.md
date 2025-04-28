# GetAllUsersResponse

## Example Usage

```typescript
import { GetAllUsersResponse } from "oneroster/models/operations";

let value: GetAllUsersResponse = {
  result: {
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
            role: "guardian",
            org: {
              href: "https://oblong-grouper.com",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://mammoth-community.biz",
            sourcedId: "<id>",
            type: "componentResource",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.GetAllUsersResponseBody](../../models/operations/getallusersresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
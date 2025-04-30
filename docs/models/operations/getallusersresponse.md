# GetAllUsersResponse

## Example Usage

```typescript
import { GetAllUsersResponse } from "@superbuilders/oneroster/models/operations";

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
    totalCount: 5529.09,
    pageCount: 56.97,
    pageNumber: 2953.63,
    offset: 8739.8,
    limit: 9237.21,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.GetAllUsersResponseBody](../../models/operations/getallusersresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
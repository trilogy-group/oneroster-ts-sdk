# GetTeachersForClassResponse

## Example Usage

```typescript
import { GetTeachersForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassResponse = {
  result: {
    teachers: [
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
              href: "https://murky-kick.org",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://unusual-hamburger.com",
            sourcedId: "<id>",
            type: "category",
          },
        ],
      },
    ],
    totalCount: 4006.53,
    pageCount: 6759.16,
    pageNumber: 4606.33,
    offset: 2344.03,
    limit: 4572.17,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetTeachersForClassResponseBody](../../models/operations/getteachersforclassresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
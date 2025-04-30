# GetStudentsForClassResponse

## Example Usage

```typescript
import { GetStudentsForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForClassResponse = {
  result: {
    students: [
      {
        sourcedId: "<id>",
        status: "active",
        enabledUser: false,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "secondary",
            role: "guardian",
            org: {
              href: "https://dependable-tapioca.biz",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://queasy-tennis.net",
            sourcedId: "<id>",
            type: "componentResource",
          },
        ],
      },
    ],
    totalCount: 5294.06,
    pageCount: 1008.08,
    pageNumber: 6259.14,
    offset: 4470.2,
    limit: 8302.07,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetStudentsForClassResponseBody](../../models/operations/getstudentsforclassresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
# GetStudentsForClassInSchoolResponse

## Example Usage

```typescript
import { GetStudentsForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForClassInSchoolResponse = {
  result: {
    users: [
      {
        sourcedId: "<id>",
        status: "active",
        enabledUser: false,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "secondary",
            role: "administrator",
            org: {
              href: "https://miserable-earth.info",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://mushy-innovation.net",
            sourcedId: "<id>",
            type: "lineItem",
          },
        ],
      },
    ],
    totalCount: 688.97,
    pageCount: 7115.24,
    pageNumber: 2107.48,
    offset: 9085.13,
    limit: 1195.81,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.GetStudentsForClassInSchoolResponseBody](../../models/operations/getstudentsforclassinschoolresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
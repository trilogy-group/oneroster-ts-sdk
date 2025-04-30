# GetTeachersForClassInSchoolResponse

## Example Usage

```typescript
import { GetTeachersForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassInSchoolResponse = {
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
            roleType: "secondary",
            role: "relative",
            org: {
              href: "https://french-pinstripe.com",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://descriptive-vein.org/",
            sourcedId: "<id>",
            type: "org",
          },
        ],
      },
    ],
    totalCount: 8067.99,
    pageCount: 1892.29,
    pageNumber: 8202.83,
    offset: 917.97,
    limit: 8690.98,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.GetTeachersForClassInSchoolResponseBody](../../models/operations/getteachersforclassinschoolresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
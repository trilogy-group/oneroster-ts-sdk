# GetTeachersForSchoolResponse

## Example Usage

```typescript
import { GetTeachersForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForSchoolResponse = {
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
            roleType: "primary",
            role: "guardian",
            org: {
              href: "https://incomplete-consistency.com/",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://illiterate-lift.net/",
            sourcedId: "<id>",
            type: "scoreScale",
          },
        ],
      },
    ],
    totalCount: 4606.06,
    pageCount: 1971.93,
    pageNumber: 89.16,
    offset: 2830.03,
    limit: 7490.36,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetTeachersForSchoolResponseBody](../../models/operations/getteachersforschoolresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
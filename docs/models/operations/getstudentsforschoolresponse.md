# GetStudentsForSchoolResponse

## Example Usage

```typescript
import { GetStudentsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForSchoolResponse = {
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
            role: "parent",
            org: {
              href: "https://trim-heartbeat.com",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://rectangular-polyester.com",
            sourcedId: "<id>",
            type: "academicSession",
          },
        ],
      },
    ],
    totalCount: 9269.28,
    pageCount: 5648.18,
    pageNumber: 5384.74,
    offset: 4716.41,
    limit: 4603.77,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetStudentsForSchoolResponseBody](../../models/operations/getstudentsforschoolresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
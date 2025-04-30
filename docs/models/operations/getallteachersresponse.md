# GetAllTeachersResponse

## Example Usage

```typescript
import { GetAllTeachersResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllTeachersResponse = {
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
            role: "relative",
            org: {
              href: "https://glossy-minister.name/",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://noteworthy-gown.org",
            sourcedId: "<id>",
            type: "student",
          },
        ],
      },
    ],
    totalCount: 3690.42,
    pageCount: 7955.78,
    pageNumber: 9816.59,
    offset: 1275.51,
    limit: 9062.37,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [operations.GetAllTeachersResponseBody](../../models/operations/getallteachersresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
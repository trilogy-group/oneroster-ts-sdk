# GetAllStudentsResponse

## Example Usage

```typescript
import { GetAllStudentsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsResponse = {
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
            role: "guardian",
            org: {
              href: "https://bowed-tuba.com/",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://nifty-e-mail.org",
            sourcedId: "<id>",
            type: "category",
          },
        ],
      },
    ],
    totalCount: 9498.7,
    pageCount: 8068.94,
    pageNumber: 5398.11,
    offset: 4145.93,
    limit: 6046.83,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [operations.GetAllStudentsResponseBody](../../models/operations/getallstudentsresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
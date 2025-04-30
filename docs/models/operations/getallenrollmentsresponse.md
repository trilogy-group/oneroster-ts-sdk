# GetAllEnrollmentsResponse

## Example Usage

```typescript
import { GetAllEnrollmentsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllEnrollmentsResponse = {
  result: {
    enrollments: [
      {
        sourcedId: "<id>",
        status: "active",
        role: "teacher",
        primary: false,
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
        user: {
          href: "https://lavish-godfather.com",
          sourcedId: "<id>",
          type: "<value>",
        },
        class: {
          href: "https://happy-go-lucky-harp.info",
          sourcedId: "<id>",
          type: "<value>",
        },
      },
    ],
    totalCount: 7167.64,
    pageCount: 5045.28,
    pageNumber: 6768.33,
    offset: 5490.35,
    limit: 8598.75,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetAllEnrollmentsResponseBody](../../models/operations/getallenrollmentsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
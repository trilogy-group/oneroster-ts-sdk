# GetGradingPeriodsForTermResponse

## Example Usage

```typescript
import { GetGradingPeriodsForTermResponse } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodsForTermResponse = {
  result: {
    gradingPeriods: [
      {
        sourcedId: "<id>",
        status: "active",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "term",
        schoolYear: 2254.23,
        org: {
          href: "https://murky-median.biz",
          sourcedId: "<id>",
          type: "category",
        },
      },
    ],
    totalCount: 5191.95,
    pageCount: 3047.51,
    pageNumber: 2690.51,
    offset: 5053.7,
    limit: 8707.94,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.GetGradingPeriodsForTermResponseBody](../../models/operations/getgradingperiodsfortermresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
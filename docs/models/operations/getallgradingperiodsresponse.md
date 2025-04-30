# GetAllGradingPeriodsResponse

## Example Usage

```typescript
import { GetAllGradingPeriodsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponse = {
  result: {
    gradingPeriods: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "term",
        schoolYear: 9004.29,
        org: {
          href: "https://bare-thigh.com/",
          sourcedId: "<id>",
          type: "courseComponent",
        },
      },
    ],
    totalCount: 8470.62,
    pageCount: 4899.2,
    pageNumber: 7865.79,
    offset: 565.14,
    limit: 9069.05,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetAllGradingPeriodsResponseBody](../../models/operations/getallgradingperiodsresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
# GetGradingPeriodsForTermResponseBody

Successful response containing a collection of grading periods for the term

## Example Usage

```typescript
import { GetGradingPeriodsForTermResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodsForTermResponseBody = {
  gradingPeriods: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "schoolYear",
      schoolYear: 3234.05,
      org: {
        href: "https://white-freckle.biz",
        sourcedId: "<id>",
        type: "lineItem",
      },
    },
  ],
  totalCount: 7011.96,
  pageCount: 7842.91,
  pageNumber: 6965.33,
  offset: 173.16,
  limit: 8745.34,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `gradingPeriods`                                                           | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
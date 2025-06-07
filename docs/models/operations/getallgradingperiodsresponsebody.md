# GetAllGradingPeriodsResponseBody

Success

## Example Usage

```typescript
import { GetAllGradingPeriodsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponseBody = {
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
  totalCount: 440.44,
  pageCount: 2126.35,
  pageNumber: 5914.59,
  offset: 77.23,
  limit: 9407.1,
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
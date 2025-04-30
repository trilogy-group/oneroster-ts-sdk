# GetAllGradingPeriodsResponseBody

Success

## Example Usage

```typescript
import { GetAllGradingPeriodsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponseBody = {
  gradingPeriods: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "gradingPeriod",
      schoolYear: 2126.35,
      org: {
        href: "https://acidic-tusk.info",
        sourcedId: "<id>",
        type: "result",
      },
    },
  ],
  totalCount: 1363.06,
  pageCount: 6221.82,
  pageNumber: 7302,
  offset: 8625.55,
  limit: 8650.97,
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